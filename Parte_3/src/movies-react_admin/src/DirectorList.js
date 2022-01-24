import {List, Datagrid, TextField, NumberField, DateField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberInput, DateInput, ReferenceInput, SelectInput} from "react-admin";

export const DirectorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton /> 
        </Datagrid>
    </List>
);

export const DirectorEdit = props => (
    <Edit {...props}>
        <SimpleForm >
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);
