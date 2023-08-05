import React from 'react';
import Card from '../UI/Card';
import EmptyCardMessage from '../UI/EmptyCardMessage';
import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './ListItem';
import InputForm from '../form/InputForm';

export default function ListsCard({
  lists,
  activeList,
  onSelectList,
  onAddNewList,
}) {
  const cardEmpty = lists.length === 0;
  const headingCombinedClasses = ['text-center', 'border'].join(' ');

  return (
    <Card variant="list">
      <h2 className={headingCombinedClasses}>Lists</h2>
      <EmptyCardMessage
        message="Start by creating a new list below:"
        show={cardEmpty}
      />
      <ListGroup as="ul">
        {lists.map((list, i) => {
          return (
            <ListItem
              onSelectList={onSelectList}
              key={i}
              title={list}
              active={list === activeList}
            />
          );
        })}
      </ListGroup>
      <InputForm inputType="list" onAddNewList={onAddNewList} lists={lists} />
    </Card>
  );
}
