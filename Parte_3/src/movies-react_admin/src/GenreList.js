import {List, Datagrid, TextField, NumberField, DateField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberInput, DateInput, ReferenceInput, SelectInput} from "react-admin";
export const GenreList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="genre" />
            <EditButton />  
        </Datagrid>
    </List>
);



export const GenreEdit = props => (
    <Edit {...props}>
        <SimpleForm >
            <TextInput source="id" />
            <TextInput source="genre" />
        </SimpleForm>
    </Edit>
);