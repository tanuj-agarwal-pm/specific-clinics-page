export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialization: string;
  experience: string;
  description: string;
  image?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-anjali",
    name: "Dr. Anjali Sharma",
    qualifications: "BAMS, MD (Ayurveda)",
    specialization: "Panchakarma & Detox Specialist",
    experience: "15+ Years Experience",
    description: "With over 15 years of dedicated practice, Dr. Anjali has successfully treated thousands of patients with chronic conditions using authentic Panchakarma therapies. She specializes in detoxification programs and has trained extensively in Kerala's traditional Ayurvedic practices."
  },
  {
    id: "dr-rajesh",
    name: "Dr. Rajesh Kumar",
    qualifications: "BAMS, MS (Shalya Tantra)",
    specialization: "Musculoskeletal Disorders",
    experience: "12+ Years Experience",
    description: "Dr. Rajesh brings expertise in treating bone and joint disorders using a combination of Ayurvedic medicines and specialized therapies. His approach integrates traditional knowledge with modern diagnostic methods for optimal patient outcomes."
  },
  {
    id: "dr-priya",
    name: "Dr. Priya Menon",
    qualifications: "BAMS, PG Diploma in Yoga",
    specialization: "Women's Health & Lifestyle",
    experience: "10+ Years Experience",
    description: "Dr. Priya focuses on women's health issues including hormonal imbalances, PCOS, and fertility. She combines Ayurvedic treatments with yoga therapy to provide holistic care for her patients."
  }
];

export const clinicAddress = "Indiranagar, 12th Main Road, Bengaluru, Karnataka 560038";
