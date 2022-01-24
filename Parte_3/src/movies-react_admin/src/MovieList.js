import {List, Datagrid, TextField, NumberField, DateField, ReferenceField, EditButton, Edit, SimpleForm, TextInput,
    NumberInput, DateInput, ReferenceInput, SelectInput, Filter} from "react-admin";

export const MovieList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="language" />
            <TextField source="original_title" />
            <DateField source="release_date" />
            <NumberField source="runtime" />
            <ReferenceField source="actor_id" reference="actors"><TextField source="id" /></ReferenceField>
            <ReferenceField source="director_id" reference="directors"><TextField source="id" /></ReferenceField>
            <EditButton />  
        </Datagrid>
    </List>
);


export const MovieEdit = props => (
    <Edit {...props}>
        <SimpleForm >
            <TextInput source="id" />
            <TextInput source="language" />
            <TextInput source="original_title" />
            <DateInput source="release_date" />
            <NumberInput source="runtime" />
            <ReferenceInput source="actor_id" reference="actors"><TextField source="id" /></ReferenceInput>
            <ReferenceInput source="director_id" reference="directors"><TextField source="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

/*
const PostTitle = ({record}) => <span> Movie {record ? `"${record.original_title}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="original_title" alwaysOn />
    <ReferenceInput label="Actor" source="actor_id" reference="actor" allowEmpty></ReferenceInput>
    <ReferenceInput label="Director" source="director_id" reference="director" allowEmpty></ReferenceInput>  
</Filter>




export const MovieList = (props) => (
    <List filters={<PostFilter />} {...props}/>)

export const MovieEdit = (props) => (
 <Edit title={<PostTitle />} {...props}/>);
 <SimpleForm/>

 */

