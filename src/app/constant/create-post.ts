import { SelectCategoryProps, SelectTypeProps } from "../types";

export const selectTypeItem: SelectTypeProps[] = [
  { value: "I feel", label: "I feel " },
  { value: "I wish", label: "I wish " },
  { value: "I regret", label: "I regret " },
];
export const selectCategoryItem: SelectCategoryProps[] = [
  { value: "Relationships (İlişkiler)", label: "Relationships (İlişkiler)" },
  {
    value: "Career & Work (Kariyer & İş)",
    label: "Career & Work (Kariyer & İş)",
  },
  {
    value: "Financial Decisions (Finansal Kararlar)",
    label: "Financial Decisions (Finansal Kararlar)",
  },
  {
    value: "Education & Learning (Eğitim & Öğrenim)",
    label: "Education & Learning (Eğitim & Öğrenim)",
  },
  {
    value: "Health & Lifestyle (Sağlık & Yaşam Tarzı)",
    label: "Health & Lifestyle (Sağlık & Yaşam Tarzı)",
  },
  {
    value: "Missed Opportunities (Kaçırılan Fırsatlar)",
    label: "Missed Opportunities (Kaçırılan Fırsatlar)",
  },
  {
    value: "Personal Choices (Kişisel Seçimler)",
    label: "Personal Choices (Kişisel Seçimler)",
  },
  { value: "Communication (İletişim)", label: "Communication (İletişim)" },
  {
    value: "Travel & Experiences (Seyahat & Deneyimler)",
    label: "Travel & Experiences (Seyahat & Deneyimler)",
  },
  {
    value: "Self-Development (Kişisel Gelişim)",
    label: "Self-Development (Kişisel Gelişim)",
  },
];

export const colors: string[] = [
  "var(--color-theme-lavender)",
  "var(--color-theme-pastelLavender)",
  "var(--color-theme-vividPurple)",
  "var(--color-theme-blue)",
];

export const introduceText: string =
  "EchoMind is a place where your thoughts don’t get lost — they echo. Share a feeling, a wish, or even a regret, and find comfort in knowing that every mind carries its own story.";
