import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Table,
  TableProps,
} from "antd";
import { v4 as uuidv4 } from "uuid";
import { StudentsApi } from "../../apis/students";

export type TStudent = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const StudentManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editStudent, setEditStudent] = useState<TStudent | null>(null);
  const [students, setStudents] = useState<TStudent[]>([]);

  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableProps<TStudent>["columns"] = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: TStudent) => {
        return (
          <Flex gap={10}>
            <Button type="primary" onClick={() => onClickEditStudent(record)}>
              Edit
            </Button>
            <Popconfirm
              title="Delete Student"
              description="Are you sure to delete this Student?"
              onConfirm={() => handleDeleteStudent(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button color="danger" variant="outlined">
                Delete
              </Button>
            </Popconfirm>
          </Flex>
        );
      },
    },
  ];

  const onClickEditStudent = (record: TStudent) => {
    setIsModalOpen(true);
    setEditStudent(record);
    form.setFieldsValue(record);
  };

  const handleDeleteStudent = async (record: TStudent) => {
    await StudentsApi.deleteStudentById(record.id);
    await fetchAllStudents();
  };

  const onClickAddStudent = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values: Omit<TStudent, "id">) => {
    if (editStudent) {
      // EDIT student
      await StudentsApi.editStudentById(values, editStudent.id);
      await fetchAllStudents();

      form.resetFields();
      setEditStudent(null);
      setIsModalOpen(false);
      return;
    }

    // Add student
    const payload: TStudent = {
      ...values,
      id: uuidv4(),
    };
    await StudentsApi.addStudent(payload);
    await fetchAllStudents();
    form.resetFields(); // reset form
    setIsModalOpen(false);
  };

  const fetchAllStudents = async (params: any = {}) => {
    const defaultParams = {
      _sort: "createAt", // sap xep theo ngay tao
      _order: "desc", // sap xep giam dan
    };

    const data = await StudentsApi.getAllStudents({
      ...defaultParams,
      ...params,
    });
    setStudents(data);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return (
    <div>
      <Row>
        <Button type="primary" onClick={onClickAddStudent}>
          Add Student
        </Button>
      </Row>
      <Table<TStudent> columns={columns} dataSource={students} rowKey={"id"} />

      <Modal
        title={editStudent ? "Edit Student" : "Add Student"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Full Name:"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Full name is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age:"
            name={"age"}
            rules={[
              {
                required: true,
                message: "Age is required",
              },
              {
                type: "number",
                min: 1,
                max: 99,
                transform: (value) => +value,
                message: "Age is Number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email:"
            name={"email"}
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                type: "email",
                message: "Email is invalid",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StudentManagement;
