const getLearningObjectiveById = (db, id) => db('learningObjectives')
  .where('id', id)
  .first()

module.exports = {
  getLearningObjectiveById,
  insertLearningObjective: (db, objective) => db('learningObjectives')
    .insert(objective, 'id')
    .then(id => getLearningObjectiveById(db, id[0]))
}
