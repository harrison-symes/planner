const getLearningObjectiveById = (db, id) => db('learningObjectives')
  .where('id', id)
  .first()

const getLearningPlanById = (db, id) => db('learningPlans')
  .where('id', id)
  .first()

module.exports = {
  getLearningObjectiveById,
  insertLearningObjective: (db, objective) => db('learningObjectives')
    .insert(objective, 'id')
    .then(id => getLearningObjectiveById(db, id[0])),
  getObjectivesByUserIds: (db, user_ids) => db('learningObjectives')
    .whereIn('user_id', user_ids)
    .select('learningObjectives.title', 'learningObjectives.id'),
  getJoinedObjectivesByUserIds: (db, user_ids) => db('objectivesInPlans')
    .join('learningPlans', 'objectivesInPlans.learning_plan_id', 'learningPlans.user_id')
    .join('learningObjectives', 'objectivesInPlans.objective_id', 'learningObjectives.id')
    .whereIn('learningPlans.user_id', user_ids)
    .select('learningObjectives.title', "learningObjectives.id"),
  getLearningPlansByUser: (db, user_id) => db('learningPlans')
    .where('user_id', user_id)
    .orderBy('created_at', 'desc'),
  getObjectivesByPlanId: (db, learning_plan_id) => db('objectivesInPlans')
    .join('learningObjectives', 'objectivesInPlans.objective_id', 'learningObjectives.id')
    .select('learningObjectives.title', 'learningObjectives.id as id')
    .where('objectivesInPlans.learning_plan_id',learning_plan_id),
  insertLeaningPlan: (db, plan) => db('learningPlans')
    .insert(plan,'id'),
  insertObjectivesArray: (db, objectives) => db('objectivesInPlans')
    .insert(objectives,'id'),
  getLearningPlanById
}
