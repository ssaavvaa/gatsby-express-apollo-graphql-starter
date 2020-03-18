import gql from "graphql-tag";

export const ADD_TRAINING_FEEDBACK = gql`
  mutation($trainingId: ID!, $userId: ID!, $language: String!, $text: String!) {
    addTrainingFeedback(
      trainingId: $trainingId
      userId: $userId
      language: $language
      text: $text
    ) {
      customId
      rating {
        author
        score
      }
      feedbacks {
        author {
          username
          picture
        }
        text
        date
      }
    }
  }
`;

export const ADD_RATING = gql`
  mutation($trainingId: ID!, $language: String!, $userId: ID!, $score: Int!) {
    addRating(
      trainingId: $trainingId
      language: $language
      userId: $userId
      score: $score
    ) {
      customId
      rating {
        author
        score
      }
      feedbacks {
        author {
          username
          picture
        }
        text
        date
      }
    }
  }
`;

export const ADD_TRIAL_TRAININGS = gql`
  mutation($_id: ID!, $trainingId: String!) {
    addTrialTraining(_id: $_id, trainingId: $trainingId) {
      trials
    }
  }
`;

export const DELETE_TRIAL_TRAINING = gql`
  mutation($_id: ID!, $trialID: String!) {
    deleteTrialTraining(_id: $_id, trialID: $trialID) {
      trials
    }
  }
`;

export const DELETE_TRAINING = gql`
  mutation($_id: ID!, $trainingID: String!) {
    deleteTraining(_id: $_id, trainingID: $trainingID) {
      trainings
    }
  }
`;

export const EDIT_USER = gql`
  mutation($username: String!, $picture: String!, $_id: ID!) {
    editUser(username: $username, picture: $picture, _id: $_id) {
      username
      picture
    }
  }
`;

export const CHECK_PROMO_CODE = gql`
  mutation($code: String!) {
    checkPromoCode(code: $code) {
      result
    }
  }
`;

export const ADD_PROMO_CODE = gql`
  mutation($code: String!, $discount: Float!) {
    addPromoCode(code: $code, discount: $discount) {
      _id
      code
      discount
    }
  }
`;

export const DELETE_PROMO_CODE = gql`
  mutation($_id: ID!) {
    deletePromoCode(_id: $_id) {
      _id
      code
      discount
    }
  }
`;

export const DELETE_CART_ITEM = gql`
  mutation($itemId: String!, $userId: ID!) {
    deleteCartItem(itemId: $itemId, userId: $userId) {
      message
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation(
    $username: String!
    $language: String
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    signUpUser(
      username: $username
      language: $language
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      token
      user {
        _id
        username
        stripeAccount
        trainings
        picture
        trials
        email
        permission
        joinDate
      }
    }
  }
`;

export const COMPLETE_STRIPE_TRANSACTION = gql`
  mutation($user: String!, $cart: String!) {
    completeStripeTransaction(user: $user, cart: $cart) {
      trainings
    }
  }
`;

export const CREATE_STRIPE_TRANSACTION = gql`
  mutation($items: String!, $user: String!) {
    createStripePayment(items: $items, user: $user) {
      secret
    }
  }
`;

export const RESET_PASSWORD_MAIL = gql`
  mutation($email: String!, $language: String) {
    resetPasswordMail(email: $email, language: $language) {
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation(
    $resetPswToken: String!
    $language: String
    $password: String!
    $passwordConfirm: String!
  ) {
    resetPassword(
      resetPswToken: $resetPswToken
      password: $password
      passwordConfirm: $passwordConfirm
      language: $language
    ) {
      message
    }
  }
`;

export const SIGN_IN_USER = gql`
  mutation($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        trainings
        stripeAccount
        picture
        trials
        email
        permission
        joinDate
      }
    }
  }
`;

export const POST_FEEDBACK = gql`
  mutation($userId: ID!, $feedback: String!, $language: String) {
    postFeedback(userId: $userId, feedback: $feedback, language: $language) {
      _id
      author {
        _id
        username
        picture
      }
      feedback
      date
    }
  }
`;

export const DISTRIBUTE_EMAILS = gql`
  mutation($body: String!) {
    distributeEmails(body: $body) {
      message
    }
  }
`;

export const DELETE_FEEDBACK = gql`
  mutation($_id: ID!) {
    deleteFeedback(_id: $_id) {
      _id
      author {
        _id
        username
        picture
      }
      feedback
      date
    }
  }
`;

export const EXECUTE_PAYPAL_PAYMENT = gql`
  mutation($items: String!, $PayerID: ID!, $paymentId: ID!) {
    executePayPalPayment(
      items: $items
      PayerID: $PayerID
      paymentId: $paymentId
    ) {
      status
    }
  }
`;
