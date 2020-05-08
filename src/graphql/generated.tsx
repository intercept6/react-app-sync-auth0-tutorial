import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
   __typename?: 'Comment';
  commentId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  eventId: Scalars['ID'];
};

export type CommentConnection = {
   __typename?: 'CommentConnection';
  items?: Maybe<Array<Maybe<Comment>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Event = {
   __typename?: 'Event';
  comments?: Maybe<CommentConnection>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type EventCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type EventConnection = {
   __typename?: 'EventConnection';
  items?: Maybe<Array<Maybe<Event>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  commentOnEvent?: Maybe<Comment>;
  createEvent?: Maybe<Event>;
  deleteEvent?: Maybe<Event>;
};


export type MutationCommentOnEventArgs = {
  content: Scalars['String'];
  createdAt: Scalars['String'];
  eventId: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  when: Scalars['String'];
  where: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  getEvent?: Maybe<Event>;
  listEvents?: Maybe<EventConnection>;
};


export type QueryGetEventArgs = {
  id: Scalars['ID'];
};


export type QueryListEventsArgs = {
  filter?: Maybe<TableEventFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  subscribeToEventComments?: Maybe<Comment>;
};


export type SubscriptionSubscribeToEventCommentsArgs = {
  eventId: Scalars['String'];
};

export type TableBooleanFilterInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
};

export type TableEventFilterInput = {
  description?: Maybe<TableStringFilterInput>;
  id?: Maybe<TableIdFilterInput>;
  name?: Maybe<TableStringFilterInput>;
  when?: Maybe<TableStringFilterInput>;
  where?: Maybe<TableStringFilterInput>;
};

export type TableFloatFilterInput = {
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  contains?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['Float']>;
};

export type TableIdFilterInput = {
  beginsWith?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contains?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
};

export type TableIntFilterInput = {
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contains?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  notContains?: Maybe<Scalars['Int']>;
};

export type TableStringFilterInput = {
  beginsWith?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  contains?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
};

export type GetEventQueryVariables = {
  id: Scalars['ID'];
};


export type GetEventQuery = (
  { __typename?: 'Query' }
  & { getEvent?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'description' | 'id' | 'name' | 'when' | 'where'>
    & { comments?: Maybe<(
      { __typename?: 'CommentConnection' }
      & Pick<CommentConnection, 'nextToken'>
    )> }
  )> }
);

export type ListEventsQueryVariables = {
  filter?: Maybe<TableEventFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type ListEventsQuery = (
  { __typename?: 'Query' }
  & { listEvents?: Maybe<(
    { __typename?: 'EventConnection' }
    & Pick<EventConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'description' | 'id' | 'name' | 'when' | 'where'>
    )>>> }
  )> }
);

export type CommentOnEventMutationVariables = {
  content: Scalars['String'];
  createdAt: Scalars['String'];
  eventId: Scalars['ID'];
};


export type CommentOnEventMutation = (
  { __typename?: 'Mutation' }
  & { commentOnEvent?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'commentId' | 'content' | 'createdAt' | 'eventId'>
  )> }
);

export type CreateEventMutationVariables = {
  description: Scalars['String'];
  name: Scalars['String'];
  when: Scalars['String'];
  where: Scalars['String'];
};


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'description' | 'id' | 'name' | 'when' | 'where'>
    & { comments?: Maybe<(
      { __typename?: 'CommentConnection' }
      & Pick<CommentConnection, 'nextToken'>
    )> }
  )> }
);

export type DeleteEventMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteEventMutation = (
  { __typename?: 'Mutation' }
  & { deleteEvent?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'description' | 'id' | 'name' | 'when' | 'where'>
    & { comments?: Maybe<(
      { __typename?: 'CommentConnection' }
      & Pick<CommentConnection, 'nextToken'>
    )> }
  )> }
);

export type SubscribeToEventCommentsSubscriptionVariables = {
  eventId: Scalars['String'];
};


export type SubscribeToEventCommentsSubscription = (
  { __typename?: 'Subscription' }
  & { subscribeToEventComments?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'commentId' | 'content' | 'createdAt' | 'eventId'>
  )> }
);


export const GetEventDocument = gql`
    query GetEvent($id: ID!) {
  getEvent(id: $id) {
    comments {
      nextToken
    }
    description
    id
    name
    when
    where
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, baseOptions);
      }
export function useGetEventLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, baseOptions);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = ApolloReactCommon.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const ListEventsDocument = gql`
    query ListEvents($filter: TableEventFilterInput, $limit: Int, $nextToken: String) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      description
      id
      name
      when
      where
    }
    nextToken
  }
}
    `;

/**
 * __useListEventsQuery__
 *
 * To run a query within a React component, call `useListEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListEventsQuery, ListEventsQueryVariables>) {
        return ApolloReactHooks.useQuery<ListEventsQuery, ListEventsQueryVariables>(ListEventsDocument, baseOptions);
      }
export function useListEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListEventsQuery, ListEventsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListEventsQuery, ListEventsQueryVariables>(ListEventsDocument, baseOptions);
        }
export type ListEventsQueryHookResult = ReturnType<typeof useListEventsQuery>;
export type ListEventsLazyQueryHookResult = ReturnType<typeof useListEventsLazyQuery>;
export type ListEventsQueryResult = ApolloReactCommon.QueryResult<ListEventsQuery, ListEventsQueryVariables>;
export const CommentOnEventDocument = gql`
    mutation CommentOnEvent($content: String!, $createdAt: String!, $eventId: ID!) {
  commentOnEvent(content: $content, createdAt: $createdAt, eventId: $eventId) {
    commentId
    content
    createdAt
    eventId
  }
}
    `;
export type CommentOnEventMutationFn = ApolloReactCommon.MutationFunction<CommentOnEventMutation, CommentOnEventMutationVariables>;

/**
 * __useCommentOnEventMutation__
 *
 * To run a mutation, you first call `useCommentOnEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentOnEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentOnEventMutation, { data, loading, error }] = useCommentOnEventMutation({
 *   variables: {
 *      content: // value for 'content'
 *      createdAt: // value for 'createdAt'
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useCommentOnEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommentOnEventMutation, CommentOnEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CommentOnEventMutation, CommentOnEventMutationVariables>(CommentOnEventDocument, baseOptions);
      }
export type CommentOnEventMutationHookResult = ReturnType<typeof useCommentOnEventMutation>;
export type CommentOnEventMutationResult = ApolloReactCommon.MutationResult<CommentOnEventMutation>;
export type CommentOnEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CommentOnEventMutation, CommentOnEventMutationVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($description: String!, $name: String!, $when: String!, $where: String!) {
  createEvent(description: $description, name: $name, when: $when, where: $where) {
    comments {
      nextToken
    }
    description
    id
    name
    when
    where
  }
}
    `;
export type CreateEventMutationFn = ApolloReactCommon.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      description: // value for 'description'
 *      name: // value for 'name'
 *      when: // value for 'when'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, baseOptions);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = ApolloReactCommon.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id) {
    comments {
      nextToken
    }
    description
    id
    name
    when
    where
  }
}
    `;
export type DeleteEventMutationFn = ApolloReactCommon.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, baseOptions);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = ApolloReactCommon.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const SubscribeToEventCommentsDocument = gql`
    subscription SubscribeToEventComments($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    commentId
    content
    createdAt
    eventId
  }
}
    `;

/**
 * __useSubscribeToEventCommentsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToEventCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToEventCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToEventCommentsSubscription({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useSubscribeToEventCommentsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SubscribeToEventCommentsSubscription, SubscribeToEventCommentsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SubscribeToEventCommentsSubscription, SubscribeToEventCommentsSubscriptionVariables>(SubscribeToEventCommentsDocument, baseOptions);
      }
export type SubscribeToEventCommentsSubscriptionHookResult = ReturnType<typeof useSubscribeToEventCommentsSubscription>;
export type SubscribeToEventCommentsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubscribeToEventCommentsSubscription>;