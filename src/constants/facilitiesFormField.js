// ✅ Define form sections & fields dynamically
export const sections = [
  {
    title: "Classroom Information",
    fields: [
      { name: "schoolName", label: "School Name", type: "text" },
      {
        name: "blocksOfClassroom",
        label: "Blocks of Classroom",
        type: "text",
      },
      {
        name: "eccdeClassroom",
        label: "ECCDE Classroom",
        type: "text",
        comment: { name: "eccdeClassroomComment", label: "ECCDE Comment" },
      },
      {
        name: "primaryClassroom",
        label: "Primary Classroom",
        type: "text",
        comment: { name: "primaryClassroomComment", label: "Primary Comment" },
      },
      {
        name: "ubeJssClassroom",
        label: "UBE JSS Classroom",
        type: "text",
        comment: { name: "ubeJssClassroomComment", label: "UBE JSS Comment" },
      },
    ],
  },
  //end and start
  {
    title: "Ventilation & Conducive",
    fields: [
      {
        name: "eccdeVentilation",
        label: "Ecccde Ventilation",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "eccdeVenComment", label: "Eccde Comment" },
      },
      {
        name: "primaryVentilation",
        label: "Primary Ventilation",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "eccdePriComment", label: "Primary Comment" },
      },
      {
        name: "ubeJssVentilation",
        label: "UBE JSS Ventilation",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "ubeJssVenComment", label: "UBE JSS Comment" },
      },
    ],
  },
  //end and start
  {
    title: "Furniture Information",
    fields: [
      {
        name: "eccdeFurniture",
        label: "ECCDE Furniture",
        type: "text",
        comment: {
          name: "eccdeFurnitureComment",
          label: "ECCDE Furniture Comment",
        },
      },
      {
        name: "primaryFurniture",
        label: "Primary Furniture",
        type: "text",
        comment: {
          name: "primaryFurnitureComment",
          label: "Primary Furniture Comment",
        },
      },
      {
        name: "ubeJssFurniture",
        label: "UBE JSS Furniture",
        type: "text",
        comment: {
          name: "ubeJssFurnitureComment",
          label: "UBE JSS Furniture Comment",
        },
      },
      {
        name: "teachersFurniture",
        label: "Teachers Furniture",
        type: "text",
        comment: {
          name: "teachersFurnitureComment",
          label: "Teachers Furniture Comment",
        },
      },
    ],
  },
  //end and start
  {
    title: "Teaching Aid & Learning Materials",
    fields: [
      {
        name: "blackboard",
        label: "Blackboard",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "blackboardComment", label: "Blackboard Comment" },
      },
      {
        name: "textbook",
        label: "Textbook",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "textbookComment", label: "Textbook Comment" },
      },
      {
        name: "whiteboard",
        label: "White Board",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "whiteboardComment", label: "White Board Comment" },
      },
      {
        name: "lessonNoyes",
        label: "Lesson Notes",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: { name: "lessonNotesComment", label: "Lesson Notes Comment" },
      },
      {
        name: "curriculum",
        label: "Curriculum",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "eccdeLearningMaterials",
        label: "Eccde Learning Materials",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        comment: {
          name: "eccdeLmComment",
          label: "Eccde Learning Materials Comment",
        },
      },
    ],
  },
  // ✅ You can add more sections like "Sanitation", "Facilities", etc.
];

export const singleSection = [
  {
    name: "toilet",
    label: "Toilet",
    type: "select",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    comment: {
      name: "toiletComment",
      label: "Toilet Comment",
    },
  },
  {
    name: "fence",
    label: "Fence",
    type: "select",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "agricFarm",
    label: "Agric Farm",
    type: "select",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sportFacility",
    label: "Sport Facility",
    type: "select",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "capturedBy",
    label: "Captured By",
    type: "select",
    options: [
      { label: "Jude", value: "jude" },
      { label: "Laha", value: "laha" },
      { label: "Jumoke", value: "jumoke" },
      { label: "Sodiq", value: "sodiq" },
      { label: "Abdul", value: "abdul" },
      { label: "Isaiah", value: "isaiah" },
      { label: "Michael Ogaga", value: "ogaga" },
      { label: "Yachiga", value: "yachiga" },
    ],
  },
];
