module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define('Patient_surgeries', 
    {},
    { timestamp: false },
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgeries;
}