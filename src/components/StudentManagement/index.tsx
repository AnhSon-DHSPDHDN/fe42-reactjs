import { useEffect, useState } from "react";
import { Button, Flex, Form, Input, Modal, Row, Table, TableProps } from "antd";
import { v4 as uuidv4 } from "uuid";

type TStudent = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const StudentManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editStudent, setEditStudent] = useState<TStudent | null>(null);
  const [students, setStudents] = useState<TStudent[]>(
    JSON.parse(localStorage.getItem("students") || "[]")
  );

  const [form] = Form.useForm();

  const syncStudentToLocalStorage = () => {
    localStorage.setItem("students", JSON.stringify(students));
  };

  useEffect(() => {
    syncStudentToLocalStorage();
  }, [students]);

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
            <Button
              color="danger"
              variant="outlined"
              onClick={() => handleDeleteStudent(record)}
            >
              Delete
            </Button>
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

  const handleDeleteStudent = (record: TStudent) => {
    const newStudentsList = students.filter(
      (_student) => _student.id !== record.id
    );
    setStudents(newStudentsList);
  };

  const onClickAddStudent = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values: Omit<TStudent, "id">) => {
    if (editStudent) {
      const _students = [...students];
      const indexEdit = _students.findIndex(
        (student) => student.id === editStudent.id
      );

      if (indexEdit > -1) {
        _students[indexEdit] = {
          ...values,
          id: editStudent.id,
        };

        setStudents(_students);
      }

      form.resetFields();
      setEditStudent(null);
      setIsModalOpen(false);
      return;
    }

    const newStudent: TStudent = {
      ...values,
      id: uuidv4(),
    };
    setStudents([...students, newStudent]);
    form.resetFields(); // reset form
    setIsModalOpen(false);
  };

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
