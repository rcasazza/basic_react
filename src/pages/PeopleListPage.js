import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [{
    name: 'John',
    age: 40,
    hairColor: 'brown',
  }, {
    name: 'Helga',
    age: 20,
    hairColor: 'red',
  }, {
    name: 'Julie',
    age: 80,
    hairColor: 'blonde',
  }];

export const PeopleListPage = () => {
    return(
        <>
            <h1>The People List Page</h1>
            <PeopleList people={people} />
        </>
    )
}