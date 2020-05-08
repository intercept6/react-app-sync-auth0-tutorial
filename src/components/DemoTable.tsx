import React from 'react';
import { useCreateEventMutation, useDeleteEventMutation, useListEventsQuery } from '../graphql/generated';

const limit = 100;

export const DemoTable: React.FC = () => {
  const { data, refetch } = useListEventsQuery({variables: {limit}});
  const [ addEvent ] = useCreateEventMutation();
  const [ deleteData ] = useDeleteEventMutation();

  const handleCreateClick = async () => {
    await addEvent({
      variables: {
        name: "My First Event",
        when: "Today",
        where: "My House",
        description: "Very first event",
      }
    })
    // FIXME: リフェッチせずにキャッシュを書き換えるべき
    await refetch();
  }

  const handleDeleteClick = async (id?: string) => {
    if (id == null) {
      return
    }
    await deleteData({variables: {id}})
    // FIXME: リフェッチせずにキャッシュを書き換えるべき
    await refetch();
  }

  return (
    <>
      <h1>Events 100件まで表示</h1>
      <button onClick={() => {handleCreateClick()}}>作成する</button>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>When</th>
          <th>Where</th>
        </tr>
        </thead>
        <tbody>
          {
            data?.listEvents?.items?.map(value => (
              <tr key={value?.id}>
                <td>{value?.id}</td>
                <td>{value?.name}</td>
                <td>{value?.description}</td>
                <td>{value?.when}</td>
                <td>{value?.where}</td>
                <td><button onClick={() => {handleDeleteClick(value?.id)}}>削除する</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};
