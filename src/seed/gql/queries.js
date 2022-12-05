/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const CONTACT = `
{
  contact {
    id
    business
    comment
    lastname
    name
    position
    email
    user {
      id
    }
  }
}
`;

export const SET_CONTACT = `
mutation Set(
  $id: Int!,
  $business: String,
  $comment: String,
  $lastname: String,
  $name: String,
  $position: String,
  $email: String,
  $user: Int,
)
{
  setContact(
    id: $id,
    user: $user,
    business: $business,
    comment: $comment,
    lastname: $lastname,
    name: $name,
    position: $position,
    email: $email,
  ) {
    contact {
      id
      business
      comment
      lastname
      name
      position
      email
      user {
        id
      }
    }
  }
}
`;

export const SAVE_CONTACT = `
mutation Save(
  $business: String!,
  $comment: String!,
  $lastname: String!,
  $name: String!,
  $position: String!,
  $email: String!,
  $user: Int!,
)
{
  saveContact(
    user: $user,
    business: $business,
    comment: $comment,
    lastname: $lastname,
    name: $name,
    position: $position,
    email: $email,
  ) {
    contact {
      id
    }
  }
}
`;

export const DELETE_CONTACT = `
mutation Delete($id: Int!)
{
  deleteContact(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;