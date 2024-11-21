import axiosInstance from "@/axios/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}

export async function loginService(formData) {
  try {
    const { data } = await axiosInstance.post("/auth/login", formData);
    if (data.success) {
      localStorage.setItem("accessToken", data.data.user.accessToken);
    }

    return data;

  } catch (error) {
    console.error("Error logging in:", error);
  }
}

// dashboard service
export async function addNewCourseService(formData) {
  const { data } = await axiosInstance.post(`/dashboard/course/add`, formData);

  return data;
}
export async function getAllCourseListService() {
  const { data } = await axiosInstance.get(`/dashboard/course/get`);

  return data;
}

export async function updateCourseByIdService(id, formData) {
  const { data } = await axiosInstance.put(
    `/dashboard/course/update/${id}`,
    formData
  );

  return data;
}

// student service
export async function fetchCourseDetailsService(courseId) {
  const { data } = await axiosInstance.get(
    `/student/course/get/details/${courseId}`
  );


  return data;
}