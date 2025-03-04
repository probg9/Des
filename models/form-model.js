// form-models.js

const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  //Form_no: { type: String, required: true },
  //Type_of_form: { type: String, required: true },
  createdAt: {
    type: Date,
    default: () =>
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), // Automatically set to the current date/time in Indian time zone
  },
  FormId:{type:String},
  DateTime:{type:String},
  FilledBy_Name: { type: String },
  Type_of_form: { type: String },
  Type_of_paitent: { type: String },
  Name: { type: String },
  AadhaarNumber: { type: String },
  Age: { type: String },

  Gender: { type: String },
  Contact_no: { type: String },
  Address: { type: String },
  Previous_Occupation: { type: String },
  Chief_Complaint: { type: String },
  HOPI: { type: String },
  Site: { type: String },
  PainSiteLeft: [{ type: mongoose.Schema.Types.Mixed }],
  PainSiteRight: [{ type: mongoose.Schema.Types.Mixed }],
  Type: { type: String },
  IndicatePain: [{ type: mongoose.Schema.Types.Mixed }],
  Onset: { type: String },
  Duration: { type: String },
  Progression: { type: String },
  Aggravating_Factors: { type: String },
  Relieving_Factors: { type: String },
  Diurnal_Variation: { type: String },
  Irritability: { type: String },
  vas: { type: String },
  NRSNeck: [{ type: mongoose.Schema.Types.Mixed }],
  NRSUpperBack: [{ type: mongoose.Schema.Types.Mixed }],
  NRSLowBack: [{ type: mongoose.Schema.Types.Mixed }],
  NRSHip: [{ type: mongoose.Schema.Types.Mixed }],
  NRSKnee: [{ type: mongoose.Schema.Types.Mixed }],
  NRSAnkleAndFoot: [{ type: mongoose.Schema.Types.Mixed }],
  Medical_History: { type: String },
  Surgical_History: { type: String },
  Sleep: { type: String },
  Appetite: { type: String },
  Diet: { type: String },
  Bowel: { type: String },
  Bladder: { type: String },
  Menstrual_History: { type: String },
  GPLAD: { type: String },
  G1: { type: String },
  G2: { type: String },
  G3: { type: String },
  G4: { type: String },

  Height: { type: String },
  Weight: { type: String },
  BMI: { type: String },
  BP: { type: String },
  PR: { type: String },
  RR: { type: String },
  Pallor: { type: String },

  Icterus: { type: String },
  Cyanosis: { type: String },
  Clubbing: { type: String },
  Erythema: { type: String },
  Eruptinosa: { type: String },
  Lymphadenopathy: { type: String },
  Oedema: { type: String },
  PostureImage: { type: String },
  GaitImage: { type: String },

  Swelling: { type: String },
  WoundObservation: { type: String },
  Scars: { type: String },
  Tenderness: { type: String },
  Spasm: { type: String },
  Warmth: { type: String },
  SwellinG: { type: String },
  OnAuscultation: { type: String },
  MotorExamination: [{ type: mongoose.Schema.Types.Mixed }],
  CervicalRange: { type: String },
  ShoulderRange: { type: String },
  ElbowRange: { type: String },
  WristRange: { type: String },
  HandRange: { type: String },
  TrunkRange: { type: String },
  HipRange: { type: String },
  KneeRange: { type: String },
  AnkleRange: { type: String },
  StrengthR: [{ type: mongoose.Schema.Types.Mixed }],
  StrengthL: [{ type: mongoose.Schema.Types.Mixed }],
  Tightness: [{ type: mongoose.Schema.Types.Mixed }],
  VoluntaryControl: { type: String },
  Reflexes: { type: String },
  NeurogicalAssessment: [{ type: mongoose.Schema.Types.Mixed }],
  Special_Tests_Positive: { type: String },
  Special_Tests_Negative: { type: String },
  Geriatric_Depression_Scale: { type: String },
  SF_36_Score: { type: String },
  Instrumental_Activity: { type: String },
  TUG: { type: String },
  KuppuSwamy_Scale: { type: String },
  Fall_Efficacy_Scale: { type: String },
  Moca_Scale_Score: { type: String },
  Activity_of_Daily_Living: { type: String },
  Deformities: [{ type: mongoose.Schema.Types.Mixed }],

  LowerExtremityFunctionScale: [{ type: mongoose.Schema.Types.Mixed }],
  TheOsteoporosisKnowledgeAssessmentTool: [{ type: mongoose.Schema.Types.Mixed }],
  SixMinuteWalkTest: { type: String },
  Grade_of_Dyspnoea: { type: String },
  Treatment: { type: String },
  Additional_remarks: { type: String },

  // Corrected field name
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
