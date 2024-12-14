export const signUpFormControls = [
	{
	  name: "userName",
	  label: "User Name",
	  placeholder: "Enter your user name",
	  type: "text",
	  componentType: "input",
	},
	{
	  name: "userEmail",
	  label: "User Email",
	  placeholder: "Enter your user email",
	  type: "email",
	  componentType: "input",
	},
	{
	  name: "password",
	  label: "Password",
	  placeholder: "Enter your password",
	  type: "password",
	  componentType: "input",
	},
  ];
  
  export const signInFormControls = [
	{
	  name: "userEmail",
	  label: "User Email",
	  placeholder: "Enter your user email",
	  type: "email",
	  componentType: "input",
	},
	{
	  name: "password",
	  label: "Password",
	  placeholder: "Enter your password",
	  type: "password",
	  componentType: "input",
	},
  ];
  
  export const initialSignInFormData = {
	userEmail: "",
	password: "",
  };
  
  export const initialSignUpFormData = {
	userName: "",
	userEmail: "",
	password: "",
  };
  
  export const languageOptions = [
	{ id: "english", label: "English" },
	{ id: "spanish", label: "Spanish" },
	{ id: "french", label: "French" },
	{ id: "german", label: "German" },
	{ id: "chinese", label: "Chinese" },
	{ id: "japanese", label: "Japanese" },
	{ id: "korean", label: "Korean" },
	{ id: "portuguese", label: "Portuguese" },
	{ id: "arabic", label: "Arabic" },
	{ id: "russian", label: "Russian" },
  ];
  
  export const courseLevelOptions = [
	{ id: "beginner", label: "Beginner" },
	{ id: "intermediate", label: "Intermediate" },
	{ id: "advanced", label: "Advanced" },
  ];
  
  export const courseCategories = [
	{ id: "web-development", label: "Web Development" },
	{ id: "backend-development", label: "Backend Development" },
	{ id: "data-science", label: "Data Science" },
	{ id: "machine-learning", label: "Machine Learning" },
	{ id: "artificial-intelligence", label: "Artificial Intelligence" },
	{ id: "cloud-computing", label: "Cloud Computing" },
	{ id: "cyber-security", label: "Cyber Security" },
	{ id: "mobile-development", label: "Mobile Development" },
	{ id: "game-development", label: "Game Development" },
	{ id: "software-engineering", label: "Software Engineering" },
  ];
  
  export const courseLandingPageFormControls = [
	{
	  name: "name",
	  label: "Name",
	  componentType: "input",
	  type: "text",
	  placeholder: "Enter course name",
	},
	{
	  name: "certificate",
	  label: "Certificate",
	  componentType: "select",
	  type: "text",
	  placeholder: "",
	  options: courseCategories,
	},
	{
		name: "subject",
		label: "Subject",
		componentType: "select",
		type: "text",
		placeholder: "",
		options: courseCategories,
	  },
	  {
		name: "examBoard",
		label: "ExamBoard",
		componentType: "select",
		type: "text",
		placeholder: "",
		options: courseCategories,
	  },
	{
	  name: "level",
	  label: "Level",
	  componentType: "select",
	  type: "text",
	  placeholder: "",
	  options: courseLevelOptions,
	},
	{
	  name: "description",
	  label: "Description",
	  componentType: "textarea",
	  type: "text",
	  placeholder: "Enter course description",
	},
	{
	  name: "objectives",
	  label: "Objectives",
	  componentType: "textarea",
	  type: "text",
	  placeholder: "Enter course objectives",
	},
	{
	  name: "welcomeMessage",
	  label: "Welcome Message",
	  componentType: "textarea",
	  placeholder: "Welcome message for students",
	},
  ];
  
  export const courseLandingInitialFormData = {
	name: "",
	certificate: "",
	subject:"",
	examBoard:"",
	level: "",
	description: "",
	objectives: "",
	welcomeMessage: "",
	image: "",
  };
  
  export const courseCurriculumInitialFormData = [
	{
	  name: "",
	  videoUrl: "",
	  freePreview: false,
	  public_id: "",
	},
  ];
  
  export const sortOptions = [
	{ id: "price-lowtohigh", label: "Price: Low to High" },
	{ id: "price-hightolow", label: "Price: High to Low" },
	{ id: "title-atoz", label: "Title: A to Z" },
	{ id: "title-ztoa", label: "Title: Z to A" },
  ];
  
  export const filterOptions = {
	category: courseCategories,
	level: courseLevelOptions,
	primaryLanguage: languageOptions,
  };
  