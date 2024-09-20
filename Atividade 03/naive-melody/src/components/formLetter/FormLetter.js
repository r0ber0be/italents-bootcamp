import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

export function FormLetter() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      name="dynamic_form_item"
      onFinish={onFinish}
    >
      <Form.List
        name="names"
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Form.Item required={true} key={field.key}>
                <Form.Item {...field} noStyle>
                  <Input placeholder="Insira sua frase" />
                </Form.Item>
                <MinusCircleOutlined
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Adicionar linha
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
};
