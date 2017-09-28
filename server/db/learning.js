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
    .select('learningObjectives.title', 'learningObjectives.id')
}
