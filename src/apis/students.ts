import axios from "axios";
import { TStudent } from "../components/StudentManagement";

export const StudentsApi = {
  getAllStudents: async (params: any = {}) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/students`,
      {
        params: params,
      }
    );
    return response.data;
  },
  deleteStudentById: async (id: string | number) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/students/${id}`);
  },
  addStudent: async (student: TStudent) => {
    const payload = {
      ...student,
      createAt: new Date().getTime(),
    };
    await axios.post(`${process.env.REACT_APP_API_URL}/students`, payload);
    // student chứa thông tin student gửi cho server
  },
  editStudentById: async (
    editStudent: Omit<TStudent, "id">,
    id: string | number
  ) => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/students/${id}`,
      editStudent
    );
  },
};
