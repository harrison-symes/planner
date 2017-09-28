const getLearningObjectiveById = (db, id) => db('learningObjectives')
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
    .whereIn('learningPlans.user_id', user_ids),
  getLearningPlansByUser: (db, user_id) => db('learningPlans')
    .where('user_id', user_id),
  getObjectivesByPlanId: (db, learning_plan_id) => db('learningObjectives')
    .join('objectivesInPlans', 'learningObjectives.id', 'objectivesInPlans.objective_id')
    .join('learningPlans', 'objectivesInPlans.learning_plan_id', 'learningPlans.id')
}
