import { useState, useEffect, useRef } from "react";

const products = [
  { id:"PRD001", name:"Artho Relief Tablet", image:"/imgs/HeroDrug 1-01.jpg", category:"Pain & Orthopedic Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps reduce joint pain, stiffness and inflammation.", indications:"Relieves joint pain, lower back pain, swollen joints, inflamed joints, sprain, strain, over stretched muscles.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD002", name:"Vericose Vein Tablet", image:"/imgs/HeroDrug 2-01.jpg", category:"Vascular Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps improve blood circulation and reduce vein swelling.", indications:"Varicose vein, dark purple or blue veins, muscle cramping, burning, throbbing and swelling in lower legs.", dosage:"1-2 tablets, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD003", name:"Gallstone Tablet", image:"/imgs/HeroDrug 3-01.jpg", category:"Digestive Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports gallbladder function and helps reduce gallstones.", indications:"Gallbladder stone, gallstone pain, indigestion, nausea, vomiting, poor bowel movement.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD004", name:"Neuro Tablet", image:"/imgs/HeroDrug 4-01.jpg", category:"Neurological Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports brain and nerve function.", indications:"Pain, sensitivity, numbness, tingling, burning problems, diabetic neuropathy, nerve rejuvenation.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD005", name:"Diabetes Tablet", image:"/imgs/HeroDrug 5-01.jpg", category:"Diabetic Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps manage blood sugar levels.", indications:"Diabetes, frequent urination, excess thirst, blurry vision, wounds that won't heal.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD006", name:"Psoriasis Tablet", image:"/imgs/HeroDrug 6-01-01.jpg", category:"Skin Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports skin health and reduces psoriasis symptoms.", indications:"Plaque psoriasis, scalp psoriasis, nail psoriasis, guttate psoriasis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD007", name:"Paralysis Tablet", image:"/imgs/HeroDrug 7-01.jpg", category:"Neurological Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports nerve recovery and improves mobility.", indications:"General paralysis, hemiplegia, facial palsy, parkinson's, stroke, tremor.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD008", name:"Cardiac Tablet", image:"/imgs/HeroDrug 8-01.jpg", category:"Cardiac Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports heart health and improves circulation.", indications:"Insomnia, palpitation, irregular heartbeat, hypertension, angina, cholesterol imbalance.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD009", name:"Stomach Tablet", image:"/imgs/HeroDrug 9-01.jpg", category:"Digestive Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports digestive health and relieves acidity.", indications:"GERD, duodenal and peptic ulcer, acidity reflux, indigestion and gastritis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD010", name:"Kidney Tablet", image:"/imgs/HeroDrug 10-01.jpg", category:"Renal Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports kidney function and urinary health.", indications:"Urinary tract infections, renal calculi, burning urination, benign prostate hyperplasia.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD011", name:"Piles Tablet", image:"/imgs/HeroDrug 11-01.jpg", category:"Digestive Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps relieve piles and improves bowel movement.", indications:"Piles, chronic constipation, bleeding piles, irritation around anus, painful bowel movements.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD012", name:"Thyroid Tablet", image:"/imgs/HeroDrug 12-01.jpg", category:"Hormonal Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports thyroid function and hormonal balance.", indications:"Fatigue, weakness, intolerance to cold, weight gain, goiter, dry skin, hair loss.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD013", name:"Gynec Tablet", image:"/imgs/HeroDrug 13-01.jpg", category:"Women Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports women reproductive health.", indications:"Ovarian cysts, fibroids, irregular periods, PCOS, pelvic inflammatory disease.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD014", name:"Gout Tablet", image:"/imgs/HeroDrug 14-01.jpg", category:"Joint Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps reduce uric acid and joint inflammation.", indications:"Joint inflammation, pain and swelling, stiffness, gout arthritis, high uric acid levels.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD015", name:"Liver Tablet", image:"/imgs/HeroDrug 15-01.jpg", category:"Liver Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports liver detoxification and function.", indications:"Hepatitis, enlargement of liver, liver and spleen disorders, poor liver function.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD016", name:"Cough Tablet", image:"/imgs/HeroDrug 16-01.jpg", category:"Respiratory Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Relieves cough and respiratory issues.", indications:"Asthma, sinusitis, bronchitis, cough, throat irritation, whooping cough, dust allergy.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD017", name:"Obesity Tablet", image:"/imgs/HeroDrug 17-01.jpg", category:"Weight Management", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports weight loss and fat metabolism.", indications:"All types of obesity.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD018", name:"Migraine Tablet", image:"/imgs/HeroDrug 18-01.jpg", category:"Neurological Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps relieve migraine and headaches.", indications:"All types of headaches, cluster headache, tension headache, sinus headache, migraine.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD019", name:"Hemoglobin Tablet", image:"/imgs/HeroDrug 19-01.jpg", category:"Blood Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Helps improve hemoglobin levels.", indications:"Anemia, iron deficiency, improves digestion, hair fall control.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD020", name:"Detox Tablet", image:"/imgs/HeroDrug 20-01.jpg", category:"General Wellness", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports detoxification and overall wellness.", indications:"Full body detox, improves metabolism, reduces cholesterol, reduces body fat.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD021", name:"Hair Tablet", image:"/imgs/HeroDrug 21-01.jpg", category:"Hair Care", forms:["Tablet"], price:{mrp:499,offer:399}, description:"Supports hair growth and scalp health.", indications:"Hair loss, dandruff, itching scalp, baldness, promotes healthy hair growth.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD022", name:"Artho Liquid", image:"/imgs/HeroDrug 22-01.jpg", category:"Pain & Orthopedic Care", forms:["Liquid"], price:{mrp:499,offer:399}, description:"Helps relieve joint pain and inflammation.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"5-10 ml, 2-3 times per day after meal or as directed by the physician." },
  { id:"PRD023", name:"Neuro Syrup", image:"/imgs/HeroDrug 23-01.jpg", category:"Neurological Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Supports brain and nerve function.", indications:"Pain, numbness, tingling, burning, diabetic neuropathy, nerve rejuvenation.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD024", name:"Diabetes Liquid", image:"/imgs/HeroDrug 24-01.jpg", category:"Diabetic Care", forms:["Liquid"], price:{mrp:499,offer:399}, description:"Helps control blood sugar levels.", indications:"Diabetes, frequent urination, excess thirst, blurry vision.", dosage:"5-10 ml, 2-3 times per day after meal or as directed by the physician." },
  { id:"PRD025", name:"Cardiac Syrup", image:"/imgs/HeroDrug 25-01.jpg", category:"Cardiac Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Supports heart health and circulation.", indications:"Palpitation, irregular heartbeat, hypertension, cholesterol imbalance.", dosage:"5-10 ml, 2-3 times per day after meal or as directed by the physician." },
  { id:"PRD026", name:"Stomach Liquid", image:"/imgs/HeroDrug 26-01.jpg", category:"Digestive Care", forms:["Liquid"], price:{mrp:499,offer:399}, description:"Supports digestion and relieves acidity.", indications:"GERD, peptic ulcer, acidity reflux, indigestion and gastritis.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD027", name:"Kidney Syrup", image:"/imgs/HeroDrug 27-01.jpg", category:"Renal Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Supports kidney and urinary health.", indications:"UTI, renal calculi, burning urination, benign prostate hyperplasia.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD028", name:"Piles Syrup", image:"/imgs/HeroDrug 28-01.jpg", category:"Digestive Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Helps relieve piles and constipation.", indications:"Piles, itching around anus, painful bowel movements, fecal leakage.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD029", name:"Thyroid Syrup", image:"/imgs/HeroDrug 29-01.jpg", category:"Hormonal Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Supports thyroid function and hormonal balance.", indications:"Fatigue, weight changes, goiter, hair loss, depression, memory loss.", dosage:"5-10 ml, 2-3 times per day after meal or as directed by the physician." },
  { id:"PRD030", name:"Gynec Syrup", image:"/imgs/HeroDrug 30-01.jpg", category:"Women Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Supports women's reproductive health.", indications:"Ovarian cysts, fibroids, irregular periods, PCOS, pelvic inflammatory disease.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD031", name:"Liver Liquid", image:"/imgs/HeroDrug 31-01.jpg", category:"Liver Care", forms:["Liquid"], price:{mrp:499,offer:399}, description:"Supports liver detoxification and function.", indications:"Hepatitis, enlargement of liver and spleen, poor liver function.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD032", name:"Cough Syrup", image:"/imgs/HeroDrug 32-01.jpg", category:"Respiratory Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Relieves cough and respiratory issues.", indications:"Asthma, sinusitis, bronchitis, wheezing, whooping cough, dust allergy, common cold.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD033", name:"Hemoglobin Syrup", image:"/imgs/HeroDrug 33-01.jpg", category:"Blood Care", forms:["Syrup"], price:{mrp:499,offer:399}, description:"Improves hemoglobin and blood health.", indications:"Anemia, improves digestion, anti-fungal, anti-bacterial benefits.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD034", name:"Artho Thineer", image:"/imgs/HeroDrug 34-01.jpg", category:"Pain & Orthopedic Care", forms:["Liquid"], price:{mrp:499,offer:399}, description:"Supports joint health and reduces inflammation.", indications:"Anemia, purifies blood, improves digestion, anti-bacterial and antiseptic benefits.", dosage:"5-10 ml, 2-3 times per day after food or as directed by the physician." },
  { id:"PRD035", name:"Artho Capsules", image:"/imgs/HeroDrug 35-01.jpg", category:"Pain & Orthopedic Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports joint health and relieves pain.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD036", name:"Vericose Vein Capsules", image:"/imgs/HeroDrug 36-01.jpg", category:"Vascular Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Improves vein health and circulation.", indications:"Varicose vein, twisted bulging veins, muscle cramping, itching around veins.", dosage:"1-2 tablets, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD037", name:"Gallstone Capsules", image:"/imgs/HeroDrug 37-01.jpg", category:"Digestive Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports gallbladder health.", indications:"Gallbladder stone, abdominal pain, back pain between shoulder blades, nausea.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD038", name:"Neuro Capsules", image:"/imgs/HeroDrug 38-01.jpg", category:"Neurological Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports nerve and brain health.", indications:"Pain, numbness, tingling, burning, diabetic neuropathy, nerve rejuvenation.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD039", name:"Stomach Capsules", image:"/imgs/HeroDrug 39-01.jpg", category:"Digestive Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports digestion and relieves acidity.", indications:"GERD, peptic ulcer, acidity, indigestion and gastritis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD040", name:"Kidney Capsules", image:"/imgs/HeroDrug 40-01.jpg", category:"Renal Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports kidney and urinary health.", indications:"UTI, renal calculi, burning urination, benign prostate hyperplasia.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD041", name:"Piles Capsules", image:"/imgs/HeroDrug 41-01.jpg", category:"Digestive Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Helps relieve piles and constipation.", indications:"Piles, itching around anus, painful bowel movements.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD042", name:"Cardiac Capsules", image:"/imgs/HeroDrug 42-01.jpg", category:"Cardiac Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports heart health and circulation.", indications:"Ischemic heart disease, hypertension, myocardial infarction, chest pain.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD043", name:"Diabetes Capsules", image:"/imgs/HeroDrug 43-01.jpg", category:"Diabetic Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Helps control blood sugar levels.", indications:"Diabetes, frequent urination, excess thirst, blurry vision.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD044", name:"Psoriasis Capsules", image:"/imgs/HeroDrug 44-01.jpg", category:"Skin Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports skin health and reduces psoriasis symptoms.", indications:"Plaque psoriasis, scalp psoriasis, nail psoriasis, guttate psoriasis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD045", name:"Liver Capsules", image:"/imgs/HeroDrug 45-01.jpg", category:"Liver Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports liver detox and function.", indications:"Hepatitis, enlargement of liver and spleen, poor liver function.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD046", name:"Cough Capsules", image:"/imgs/HeroDrug 46-01.jpg", category:"Respiratory Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Relieves cough and respiratory problems.", indications:"Asthma, bronchitis, wheezing, whooping cough, dust allergy, common cold.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD047", name:"Gynec Capsules", image:"/imgs/HeroDrug 47-01.jpg", category:"Women Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports women reproductive health.", indications:"Ovarian cysts, fibroids, irregular periods, PCOS.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD048", name:"Hair Capsules", image:"/imgs/HeroDrug 48-01.jpg", category:"Hair Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports hair growth and scalp health.", indications:"Hair loss, thinning, bald spots, dandruff, promotes healthy hair growth.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD049", name:"Hemoglobin Capsules", image:"/imgs/HeroDrug 49-01.jpg", category:"Blood Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Improves hemoglobin and blood health.", indications:"Anemia, improves digestion, anti-fungal and anti-bacterial benefits.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD050", name:"Detox Capsules", image:"/imgs/HeroDrug 50-01.jpg", category:"General Wellness", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports detoxification and metabolism.", indications:"Full body detox, improves metabolism, reduces cholesterol and body fat.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD051", name:"Obesity Capsules", image:"/imgs/HeroDrug 51-01.jpg", category:"Weight Management", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports weight loss and fat metabolism.", indications:"All types of obesity.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD052", name:"Sexual Wellness Capsules", image:"/imgs/HeroDrug 52-01.jpg", category:"Men Wellness", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Supports sexual health and performance.", indications:"Erectile dysfunction, premature ejaculation, low libido.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD053", name:"Brain Booster Capsules", image:"/imgs/HeroDrug 53-01.jpg", category:"Neurological Care", forms:["Capsules"], price:{mrp:499,offer:399}, description:"Enhances brain function and memory.", indications:"To improve wellness and cognitive function in adults.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD054", name:"Sperm Count Granules", image:"/imgs/HeroDrug 54-01.jpg", category:"Men Wellness", forms:["Granules"], price:{mrp:499,offer:399}, description:"Supports male fertility and sperm count.", indications:"Sperm count increase, loss of libido, male impotence, premature ejaculation.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD055", name:"Neuro Chooranam", image:"/imgs/HeroDrug 55-01.jpg", category:"Neurological Care", forms:["Chooranam"], price:{mrp:499,offer:399}, description:"Supports nerve and brain health.", indications:"Pain, numbness, tingling, burning, diabetic neuropathy.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD056", name:"Pain Chooranam", image:"/imgs/HeroDrug 56-01.jpg", category:"Pain & Orthopedic Care", forms:["Chooranam"], price:{mrp:499,offer:399}, description:"Relieves joint and muscle pain.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD057", name:"Diabetes Chooranam", image:"/imgs/HeroDrug 57-01.jpg", category:"Diabetic Care", forms:["Chooranam"], price:{mrp:499,offer:399}, description:"Helps manage blood sugar levels.", indications:"Diabetes, frequent urination, excess thirst, blurry vision.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD058", name:"Detox Chooranam", image:"/imgs/HeroDrug 58-01.jpg", category:"General Wellness", forms:["Chooranam"], price:{mrp:499,offer:399}, description:"Supports detoxification and metabolism.", indications:"Full body detox, improves metabolism, reduces cholesterol and body fat.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD059", name:"Obesity Chooranam", image:"/imgs/HeroDrug 59-01.jpg", category:"Weight Management", forms:["Chooranam"], price:{mrp:499,offer:399}, description:"Supports weight management.", indications:"All types of obesity.", dosage:"1 tablet, 2-3 times a day after food or as directed by the physician." },
  { id:"PRD060", name:"Artho Lotion", image:"/imgs/HeroDrug 60-01.jpg", category:"Pain & Orthopedic Care", forms:["Lotion"], price:{mrp:499,offer:399}, description:"Provides external relief from joint and muscle pain.", indications:"Joint pain, muscle pain, swelling, inflammation, sprain, stiffness, arthritis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD061", name:"Psoriasis Lotion", image:"/imgs/HeroDrug 61-01.jpg", category:"Skin Care", forms:["Lotion"], price:{mrp:499,offer:399}, description:"Supports skin health and relieves psoriasis symptoms.", indications:"Psoriasis, plaque psoriasis, scalp psoriasis, nail psoriasis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD062", name:"Artho Oil", image:"/imgs/HeroDrug 62-01.jpg", category:"Pain & Orthopedic Care", forms:["Oil"], price:{mrp:499,offer:399}, description:"Provides external relief from joint and muscle pain.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD063", name:"Psoriasis Oil", image:"/imgs/HeroDrug 63-01.jpg", category:"Skin Care", forms:["Oil"], price:{mrp:499,offer:399}, description:"Supports skin health and relieves psoriasis.", indications:"Psoriasis, plaque psoriasis, scalp psoriasis, nail psoriasis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD064", name:"Hair Oil", image:"/imgs/HeroDrug 64-01.jpg", category:"Hair Care", forms:["Oil"], price:{mrp:499,offer:399}, description:"Promotes hair growth and scalp health.", indications:"Hair loss, thinning, bald spots, dandruff, promotes healthy hair growth.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD065", name:"Pain Balm", image:"/imgs/HeroDrug 65-01.jpg", category:"Pain & Orthopedic Care", forms:["Balm"], price:{mrp:499,offer:399}, description:"Provides fast relief from pain.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"Apply externally, gently massage twice a day or as directed by the physician." },
  { id:"PRD066", name:"Artho Liniment", image:"/imgs/HeroDrug 66-01.jpg", category:"Pain & Orthopedic Care", forms:["Liniment"], price:{mrp:499,offer:399}, description:"Provides external relief from joint and muscle pain.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD067", name:"Artho Gel", image:"/imgs/HeroDrug 67-01.jpg", category:"Pain & Orthopedic Care", forms:["Gel"], price:{mrp:499,offer:399}, description:"Provides fast relief from pain and inflammation.", indications:"Joint pain, lower back pain, swelling, inflammation, sprain, arthritis.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD068", name:"Artho Spray", image:"/imgs/HeroDrug 68-01.jpg", category:"Pain & Orthopedic Care", forms:["Spray"], price:{mrp:499,offer:399}, description:"Provides instant relief from pain.", indications:"Joint pain, swelling, inflammation, sprain, muscle pain, stiffness.", dosage:"5-10 ml, gently massage twice a day externally or as directed by the physician." },
  { id:"PRD069", name:"Artho Roll On", image:"/imgs/HeroDrug 69-01.jpg", category:"Pain & Orthopedic Care", forms:["Roll On"], price:{mrp:499,offer:399}, description:"Easy-to-use roll-on for pain relief.", indications:"Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage:"Apply externally on affected area, gently massage twice a day or as directed by the physician." },
  { id:"PRD070", name:"Artho Ointment", image:"/imgs/HeroDrug 70-01.jpg", category:"Pain & Orthopedic Care", forms:["Ointment"], price:{mrp:499,offer:399}, description:"Provides external relief from joint and muscle pain.", indications:"Joint pain, low back pain, swollen joints, inflamed joints, arthritis.", dosage:"Gently massage twice a day externally or as directed by the physician." },
  { id:"PRD071", name:"Psoriasis Ointment", image:"/imgs/HeroDrug 71-01.jpg", category:"Skin Care", forms:["Ointment"], price:{mrp:499,offer:399}, description:"Supports skin health and relieves psoriasis.", indications:"Relieves itching, psoriasis symptoms, skin inflammation.", dosage:"Gently massage twice a day externally or as directed by the physician." },
  { id:"PRD072", name:"Wound Ointment", image:"/imgs/HeroDrug 72-01.jpg", category:"First Aid Care", forms:["Ointment"], price:{mrp:499,offer:399}, description:"Supports wound healing.", indications:"Healing cuts, burns and wounds.", dosage:"Gently massage twice a day externally or as directed by the physician." },
  { id:"PRD073", name:"Psoriasis Soap", image:"/imgs/HeroDrug 73-01.jpg", category:"Skin Care", forms:["Soap"], price:{mrp:499,offer:399}, description:"Supports skin care for psoriasis.", indications:"Psoriasis, eczema, erythema, fungal and bacterial infections, itching, scaling.", dosage:"Apply on wet skin, wash off lather with water and pat dry." },
  { id:"PRD074", name:"Fairness Soap (Aloe)", image:"/imgs/HeroDrug 74-01.jpg", category:"Skin Care", forms:["Soap"], price:{mrp:499,offer:399}, description:"Improves skin tone and complexion.", indications:"Fairness, complexion enhancement and pigmentation disorder.", dosage:"Apply on wet skin, wash off lather with water and pat dry." },
  { id:"PRD075", name:"Fairness Soap (Gold)", image:"/imgs/HeroDrug 75-01.jpg", category:"Skin Care", forms:["Soap"], price:{mrp:499,offer:399}, description:"Enhances skin glow and reduces pigmentation.", indications:"Removes dark circles, wrinkles, fairness, complexion enhancement.", dosage:"Apply on wet skin, wash off lather with water and pat dry." },
  { id:"PRD076", name:"Anti-Dandruff Shampoo", image:"/imgs/HeroDrug 76-01.jpg", category:"Hair Care", forms:["Shampoo"], price:{mrp:499,offer:399}, description:"Helps reduce dandruff and improve scalp health.", indications:"Anti-dandruff, itchy scalp, hair fall prevention, seborrheic dermatitis.", dosage:"Apply to scalp, massage for a few minutes and rinse with water." },
  { id:"PRD077", name:"Hair Fall Shampoo", image:"/imgs/HeroDrug 77-01.jpg", category:"Hair Care", forms:["Shampoo"], price:{mrp:499,offer:399}, description:"Helps control hair fall and nourish hair.", indications:"Hair fall, thin hair, scanty hair, grey hair, hair nourishment.", dosage:"Apply to scalp, massage for a few minutes and rinse with water." },
  { id:"PRD078", name:"Glow Face Cream", image:"/imgs/HeroDrug 78-01.jpg", category:"Skin Care", forms:["Cream"], price:{mrp:499,offer:399}, description:"Enhances skin glow and elasticity.", indications:"Keeps skin moisture and elasticity, reduces wrinkles, age spots and fine lines.", dosage:"Apply on face, gently massage twice a day or as directed by the physician." },
  { id:"PRD079", name:"Pimple Clear Face Cream", image:"/imgs/HeroDrug 79-01.jpg", category:"Skin Care", forms:["Cream"], price:{mrp:499,offer:399}, description:"Helps reduce pimples and improve skin clarity.", indications:"Removes dark circles, pimples, wrinkles, complexion enhancement.", dosage:"Apply on face, gently massage twice a day or as directed by the physician." },
  { id:"PRD080", name:"Tooth Paste", image:"/imgs/HeroDrug 80-01.jpg", category:"Oral Care", forms:["Paste"], price:{mrp:499,offer:399}, description:"Supports oral hygiene and dental care.", indications:"Maintains oral hygiene, strengthens teeth and gums, prevents bad breath.", dosage:"Use twice daily for brushing teeth or as directed by the physician." },
];

const allCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
const allForms = ["All Forms", ...Array.from(new Set(products.flatMap(p => p.forms)))];

const formColors = {
  Tablet:"#2d7a3a", Capsules:"#6b46c1", Syrup:"#d97706", Liquid:"#2563eb",
  Oil:"#b45309", Lotion:"#db2777", Cream:"#ec4899", Gel:"#0891b2",
  Ointment:"#059669", Soap:"#8b5cf6", Shampoo:"#f59e0b", Balm:"#ef4444",
  Chooranam:"#7c3aed", Granules:"#10b981", Spray:"#06b6d4", Liniment:"#f97316",
  "Roll On":"#84cc16", Paste:"#64748b"
};

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:#f7fdf8;color:#2a3a28;overflow-x:hidden}
:root{--g:#2d7a3a;--g2:#1a4a22;--gp:#e8f5eb;--dark:#0f1f0a;--muted:#6b7c6a}
.wrap{max-width:1260px;margin:0 auto;padding:0 24px}
/* HERO */
.hero{background:linear-gradient(145deg,#0a2210,#1a5028,#2d7a3a);padding:72px 24px 56px;text-align:center;overflow:hidden;position:relative}
.hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 60%,rgba(125,216,148,.08),transparent 60%),radial-gradient(ellipse at 70% 30%,rgba(212,180,120,.07),transparent 60%);pointer-events:none}
.hero-inner{position:relative;z-index:2;max-width:640px;margin:0 auto}
.hero-pill{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#d4c5a9;font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;padding:5px 16px;border-radius:50px;margin-bottom:20px}
.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(38px,6vw,64px);font-weight:700;color:#fff;line-height:1.1;margin-bottom:16px}
.hero h1 em{color:#7dd894;font-style:italic}
.hero p{font-size:15.5px;color:rgba(255,255,255,.78);line-height:1.7;margin-bottom:28px}
.hero-search{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.25);border-radius:50px;padding:11px 20px;max-width:440px;margin:0 auto 32px}
.hero-search svg{color:rgba(255,255,255,.6);flex-shrink:0}
.hero-search input{background:none;border:none;outline:none;color:#fff;font-size:14.5px;font-family:'DM Sans',sans-serif;width:100%}
.hero-search input::placeholder{color:rgba(255,255,255,.45)}
.hero-tags{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.hero-tag{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.85);font-size:12px;font-weight:600;padding:6px 14px;border-radius:50px}
/* WHY */
.why{padding:72px 0;background:#fff}
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.why-card{padding:26px 20px;background:var(--gp);border-radius:18px;text-align:center;border:1px solid rgba(45,122,58,.07);transition:transform .3s,box-shadow .3s}
.why-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(45,122,58,.12)}
.why-icon{width:50px;height:50px;background:var(--g);border-radius:13px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:#fff;font-size:22px}
.why-card h3{font-size:14.5px;font-weight:700;color:var(--dark);margin-bottom:7px}
.why-card p{font-size:12.5px;color:var(--muted);line-height:1.6}
/* SECTION */
.section-head{text-align:center;margin-bottom:28px}
.badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--g);background:var(--gp);padding:5px 14px;border-radius:50px;margin-bottom:10px}
.section-head h2{font-family:'Cormorant Garamond',serif;font-size:clamp(26px,4vw,42px);font-weight:700;color:var(--dark);margin-bottom:6px}
.section-head p{font-size:14.5px;color:var(--muted)}
/* PRODUCTS SECTION */
.products{padding:72px 0;background:#f7fdf8}
/* FILTERS */
.filter-bar{background:#fff;border-radius:16px;padding:16px 18px;box-shadow:0 2px 10px rgba(0,0,0,.05);margin-bottom:28px;display:flex;flex-direction:column;gap:12px}
.filter-row{display:flex;align-items:center;gap:10px}
.filter-label{font-size:11.5px;font-weight:700;color:var(--muted);white-space:nowrap;text-transform:uppercase;letter-spacing:.06em;min-width:65px}
.filter-scroll{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.filter-scroll::-webkit-scrollbar{display:none}
.fbtn{background:none;border:1.5px solid rgba(45,122,58,.2);color:var(--muted);font-size:12px;font-weight:600;padding:5px 13px;border-radius:50px;cursor:pointer;white-space:nowrap;transition:all .2s;font-family:'DM Sans',sans-serif}
.fbtn:hover{border-color:var(--g);color:var(--g)}
.fbtn.active{background:var(--g);color:#fff;border-color:var(--g)}
/* GRID */
.cp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.cp-card{background:#fff;border-radius:18px;overflow:hidden;border:1px solid rgba(45,122,58,.08);transition:transform .3s,box-shadow .3s;cursor:pointer}
.cp-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(45,122,58,.13)}
.card-img{position:relative;background:var(--gp);height:180px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.card-img img{width:80%;height:100%;object-fit:contain}
.card-img-fb{display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:var(--g);opacity:.3}
.form-badge{position:absolute;bottom:8px;left:10px;color:#fff;font-size:10px;font-weight:700;padding:3px 10px;border-radius:50px}
.wish-btn{position:absolute;top:10px;right:10px;width:30px;height:30px;background:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.1);font-size:15px;transition:transform .2s}
.wish-btn:hover{transform:scale(1.12)}
.card-body{padding:14px 15px}
.card-cat{font-size:10px;font-weight:700;color:var(--g);letter-spacing:.07em;text-transform:uppercase}
.card-body h3{font-size:13.5px;font-weight:700;color:var(--dark);margin:5px 0 5px;line-height:1.3}
.card-body p{font-size:11.5px;color:var(--muted);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:11px}
.price-wrap{display:flex;align-items:baseline;gap:5px}
.p-offer{font-size:15px;font-weight:700;color:var(--g)}
.p-mrp{font-size:11.5px;color:var(--muted);text-decoration:line-through}
.add-btn{display:inline-flex;align-items:center;gap:5px;background:var(--g);color:#fff;border:none;font-size:11.5px;font-weight:700;padding:7px 12px;border-radius:50px;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .2s,transform .15s}
.add-btn:hover{background:var(--g2);transform:scale(1.04)}
.add-btn.added{background:#16a34a}
/* CART FAB */
.cart-fab{position:fixed;bottom:30px;right:30px;z-index:900;width:56px;height:56px;background:var(--g);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 24px rgba(45,122,58,.45);font-size:22px;transition:transform .2s,box-shadow .2s;color:#fff}
.cart-fab:hover{transform:scale(1.08);box-shadow:0 10px 32px rgba(45,122,58,.5)}
.cart-badge{position:absolute;top:-4px;right:-4px;background:#e53e3e;color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center}
/* CART DRAWER */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000}
.cart-drawer{position:fixed;top:0;right:0;bottom:0;width:380px;background:#fff;z-index:1001;display:flex;flex-direction:column;box-shadow:-8px 0 40px rgba(0,0,0,.15);animation:slideIn .3s ease}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
.cart-head{display:flex;align-items:center;justify-content:space-between;padding:20px 22px;border-bottom:1px solid var(--gp)}
.cart-head h3{font-size:16px;font-weight:700;color:var(--dark);display:flex;align-items:center;gap:8px}
.close-btn{background:none;border:none;cursor:pointer;color:var(--muted);font-size:20px;transition:color .2s;padding:4px}
.close-btn:hover{color:var(--dark)}
.cart-items{flex:1;overflow-y:auto;padding:14px 22px;display:flex;flex-direction:column;gap:12px}
.cart-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--muted);font-size:14.5px;padding:48px 0;text-align:center}
.cart-empty span{font-size:36px}
.citem{display:flex;align-items:center;gap:10px;padding:11px;background:var(--gp);border-radius:12px}
.citem-img{width:50px;height:50px;object-fit:contain;border-radius:8px;background:#fff;flex-shrink:0}
.citem-info{flex:1;display:flex;flex-direction:column;gap:2px}
.citem-name{font-size:13px;font-weight:600;color:var(--dark);line-height:1.3}
.citem-form{font-size:11px;color:var(--muted)}
.citem-price{font-size:12.5px;font-weight:700;color:var(--g)}
.qty-ctrl{display:flex;align-items:center;gap:5px}
.qty-btn{width:26px;height:26px;background:#fff;border:1.5px solid rgba(45,122,58,.2);border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--g);font-size:14px;transition:all .2s}
.qty-btn:hover{background:var(--g);color:#fff;border-color:var(--g)}
.qty-num{font-size:13.5px;font-weight:700;color:var(--dark);min-width:18px;text-align:center}
.cart-foot{padding:18px 22px;border-top:1px solid var(--gp);display:flex;flex-direction:column;gap:12px}
.cart-total{display:flex;justify-content:space-between;font-size:16px;font-weight:700;color:var(--dark)}
.checkout-btn{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--g);color:#fff;font-size:14.5px;font-weight:700;padding:13px 24px;border-radius:50px;text-decoration:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:filter .2s,transform .2s}
.checkout-btn:hover{filter:brightness(1.07);transform:translateY(-2px)}
/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}
.modal{background:#fff;border-radius:22px;max-width:800px;width:100%;max-height:90vh;overflow-y:auto;position:relative}
.modal-close{position:absolute;top:14px;right:14px;width:34px;height:34px;background:var(--gp);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--dark);z-index:2;transition:background .2s}
.modal-close:hover{background:#d0ead4}
.modal-grid{display:grid;grid-template-columns:1fr 1.2fr}
.modal-img{background:var(--gp);border-radius:22px 0 0 22px;display:flex;align-items:center;justify-content:center;min-height:300px;padding:24px}
.modal-img img{width:80%;object-fit:contain}
.modal-info{padding:34px 30px;display:flex;flex-direction:column;gap:12px}
.modal-cat{font-size:10.5px;font-weight:700;color:var(--g);text-transform:uppercase;letter-spacing:.07em}
.modal-info h2{font-family:'Cormorant Garamond',serif;font-size:25px;font-weight:700;color:var(--dark);line-height:1.2}
.modal-desc{font-size:14px;color:var(--muted);line-height:1.65}
.modal-price{display:flex;align-items:center;gap:10px}
.mp-offer{font-size:24px;font-weight:700;color:var(--g)}
.mp-mrp{font-size:15px;color:var(--muted);text-decoration:line-through}
.mp-save{font-size:11.5px;font-weight:700;background:#dcfce7;color:var(--g);padding:3px 10px;border-radius:50px}
.modal-sec h4{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--g);margin-bottom:5px}
.modal-sec p{font-size:13px;color:var(--dark);line-height:1.65}
.modal-cart-btn{display:flex;align-items:center;gap:8px;background:var(--g);color:#fff;border:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:50px;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .2s,transform .2s;align-self:flex-start;margin-top:4px}
.modal-cart-btn:hover{background:var(--g2);transform:translateY(-2px)}
/* NO RESULTS */
.no-results{text-align:center;padding:56px 0;color:var(--muted);font-size:15px;display:flex;flex-direction:column;align-items:center;gap:12px}
.no-results span{font-size:40px}
/* CTA */
.cta{padding:88px 24px;background:linear-gradient(135deg,var(--g2),var(--g));text-align:center}
.cta-inner{max-width:580px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:8px}
.cta-inner h2{font-family:'Cormorant Garamond',serif;font-size:clamp(26px,4vw,46px);font-weight:700;color:#fff;margin:10px 0 12px}
.cta-inner p{font-size:15.5px;color:rgba(255,255,255,.82);margin-bottom:20px}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;gap:7px;background:var(--g);color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:50px;text-decoration:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 4px 18px rgba(45,122,58,.4);transition:transform .2s,filter .2s}
.btn-primary:hover{transform:translateY(-3px);filter:brightness(1.08)}
.btn-ghost{display:inline-flex;align-items:center;gap:7px;border:2px solid rgba(255,255,255,.35);color:#fff;font-size:14px;font-weight:600;padding:11px 24px;border-radius:50px;text-decoration:none;transition:border-color .2s,background .2s}
.btn-ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}
@media(max-width:1100px){.cp-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:1024px){.why-grid{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.cp-grid{grid-template-columns:repeat(2,1fr)}.modal-grid{grid-template-columns:1fr}.modal-img{border-radius:22px 22px 0 0;min-height:200px}.cart-drawer{width:100%}}
@media(max-width:600px){.why-grid{grid-template-columns:1fr}.cp-grid{gap:12px}}
`;

export default function HerbboDrugCatalog() {
  const [activeCat, setActiveCat] = useState("All");
  const [activeForm, setActiveForm] = useState("All Forms");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const filtered = products.filter(p => {
    const mc = activeCat === "All" || p.category === activeCat;
    const mf = activeForm === "All Forms" || p.forms.includes(activeForm);
    const ms = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return mc && mf && ms;
  });

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  };

  const cartTotal = cart.reduce((s, i) => s + i.price.offer * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const getFormColor = (form) => formColors[form] || "#2d7a3a";

  return (
    <>
      <style>{styles}</style>

      {/* CART FAB */}
      <button className="cart-fab" onClick={() => setCartOpen(true)}>
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>

      {/* CART OVERLAY */}
      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)} />}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="cart-drawer">
          <div className="cart-head">
            <h3>🛒 Your Cart ({cartCount})</h3>
            <button className="close-btn" onClick={() => setCartOpen(false)}>✕</button>
          </div>
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <span>📦</span>
                <p>Your cart is empty</p>
              </div>
            ) : cart.map(item => (
              <div className="citem" key={item.id}>
                <img src={item.image} alt={item.name} className="citem-img"
                  onError={e => { e.target.style.display = "none"; }} />
                <div className="citem-info">
                  <span className="citem-name">{item.name}</span>
                  <span className="citem-form">{item.forms[0]}</span>
                  <span className="citem-price">₹{item.price.offer}</span>
                </div>
                <div className="qty-ctrl">
                  <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="cart-foot">
              <div className="cart-total">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">
                Proceed to Checkout →
              </button>
            </div>
          )}
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-grid">
              <div className="modal-img">
                <img src={selected.image} alt={selected.name}
                  onError={e => { e.target.style.display = "none"; }} />
              </div>
              <div className="modal-info">
                <span className="modal-cat">{selected.category} · {selected.forms[0]}</span>
                <h2>{selected.name}</h2>
                <p className="modal-desc">{selected.description}</p>
                <div className="modal-price">
                  <span className="mp-offer">₹{selected.price.offer}</span>
                  <span className="mp-mrp">₹{selected.price.mrp}</span>
                  <span className="mp-save">{Math.round((1 - selected.price.offer / selected.price.mrp) * 100)}% OFF</span>
                </div>
                <div className="modal-sec">
                  <h4>Indications</h4>
                  <p>{selected.indications}</p>
                </div>
                <div className="modal-sec">
                  <h4>Dosage</h4>
                  <p>{selected.dosage}</p>
                </div>
                <button className="modal-cart-btn" onClick={() => { addToCart(selected); setSelected(null); setCartOpen(true); }}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-pill">✦ Herbbodrug Products</div>
          <h1>Heal Naturally,<br /><em>Live Powerfully</em></h1>
          <p>80+ GMP-certified Ayurvedic formulations crafted from the finest herbs for chronic and everyday conditions.</p>
          
          <div className="hero-tags">
            {["GMP Certified","500+ Herb Ingredients","Chronic Disease Care","Ayurvedic Formulas"].map((t,i)=>(
              <span key={i} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="wrap">
          <div className="why-grid">
            {[
              { icon:"🌿", title:"100% Herbal", desc:"Every ingredient is plant-sourced with no harmful additives." },
              { icon:"🛡️", title:"GMP & ISO Certified", desc:"Manufactured under international quality and safety standards." },
              { icon:"✨", title:"Ayurvedic Formulas", desc:"Backed by 5000+ years of Ayurvedic wisdom and modern research." },
              { icon:"⭐", title:"50M USD Capacity", desc:"Large-scale GMP plant in Chennai exporting to 9+ countries." },
            ].map((w,i)=>(
              <div className="why-card" key={i}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div className="wrap">
          <div className="section-head">
            <span className="badge">Our Products</span>
            <h2>Complete Herbbodrug Range</h2>
            <p>{filtered.length} products found</p>
          </div>

          {/* FILTERS */}
          <div className="filter-bar">
            <div className="filter-row">
              <span className="filter-label">Category</span>
              <div className="filter-scroll">
                {allCategories.map(c => (
                  <button key={c} className={`fbtn ${activeCat===c?"active":""}`} onClick={()=>setActiveCat(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div className="filter-row">
              <span className="filter-label">Form</span>
              <div className="filter-scroll">
                {allForms.map(f => (
                  <button key={f} className={`fbtn ${activeForm===f?"active":""}`} onClick={()=>setActiveForm(f)}>{f}</button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID */}
          {filtered.length > 0 ? (
            <div className="cp-grid">
              {filtered.map(p => (
                <div className="cp-card" key={p.id} onClick={() => setSelected(p)}>
                  <div className="card-img">
                    <img src={p.image} alt={p.name}
                      onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
                    <div className="card-img-fb">{p.forms[0][0]}</div>
                    <span className="form-badge" style={{background: getFormColor(p.forms[0])}}>{p.forms[0]}</span>
                    <button className="wish-btn"
                      onClick={e => { e.stopPropagation(); setWishlist(w=>({...w,[p.id]:!w[p.id]})); }}>
                      {wishlist[p.id] ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <div className="card-body">
                    <span className="card-cat">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="card-footer">
                      <div className="price-wrap">
                        <span className="p-offer">₹{p.price.offer}</span>
                        <span className="p-mrp">₹{p.price.mrp}</span>
                      </div>
                      <button className={`add-btn ${addedId===p.id?"added":""}`} onClick={e => addToCart(p, e)}>
                        {addedId===p.id ? "✓ Added" : "🛒 Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span>🔍</span>
              <p>No products found. Try a different search or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          
          <h2>Want Products Under Your Own Brand?</h2>
          <p>We offer franchise and white labeling for our entire product range. Start today.</p>
          <div className="cta-btns">
            <a href="/franchise" className="btn-primary">Apply for Franchise →</a>
            <a href="/contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}