/* eslint-disable import/prefer-default-export */
const es = {
  screens: {
    user: {
      auth: {
        welcome: {
          title: 'Welcome to ',
          subtitle: "Let's get started!",
          button: 'Create my account',
        },
        signin: {
          title: 'Welcome back to ',
          subtitle: 'Enter your account information',
          forgot: 'Forgot your password?',
          errors: {
            invalidLogin:
              "The email and password you enter didn't match. Please double-check and try again.",
          },
        },
        forgot: {
          step1: {
            title:
              "Enter your email and we'll send you a link to reset your password",
            modal: {
              text: ' We sent you a link to reset your password to:',
            },
          },
          step2: {
            header: 'Verification',
            title: 'Verify your email',
            subtitle: 'Enter the 6-digit code we sent to your email',
            expiring: 'The code will expire in: ',
          },
          step3: {
            title: 'Enter a new password for your account',
          },
        },
        signup: {
          step1: {
            title: "Let's create your account",
            subtitle: 'Please complete the information below',
          },
          step2: {
            title: 'Verify your number',
            subtitle: 'Enter the 6-digit code we sent to your phone number',
            expiring: 'The code will expire in: ',
            errors: {
              invalidCode: 'Invalid code',
            },
          },
          step4: {
            title: "You're account was created successfully",
          },
        },
      },
      profile: {
        title: 'Hi ',
        accountInfo: 'Account Info',
        cashOut: 'Cash Out',
        currencies: 'Currencies',
        support: 'Support',
        legal: 'Legal',
        step1: {
          title: 'Account Info',
          username: 'Username',
          email: 'Email',
          phone: 'Phone number',
        },
        step2: {
          header: 'Change password',
          title: 'Current password',
        },
        step3: {
          header: 'Change password',
          title: 'Enter your new password',
        },
        step4: {
          header: 'Change password',
          title: 'Confirm your password',
        },
        step5: {
          title: 'Your account password was changed',
          button: 'Back to profile',
        },
      },
    },
  },

  components: {
    bottomTabs: {
      main: {
        home: 'Homeorita',
        account: 'Accountrita',
        card: 'Cardrita',
      },
    },
    headers: {
      verification: 'Verification',
      profile: 'Profile',
    },
    inputs: {
      placeholders: {
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        createPassword: 'Create Password',
        name: 'Name',
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone',
        enterPhone: 'Enter phone number',
        address: 'Address',
        city: 'City',
        state: 'State',
      },
      switches: {
        enableFaceId: 'Enable Face ID',
      },
      checkboxes: {
        agreeToTerms: 'I agree to the Terms of Service and Privacy Policy',
      },
    },
    buttons: {
      login: 'Login',
      signup: 'Sign Up',
      forgotPassword: 'Forgot Password',
      send: 'Send',
      cancel: 'Cancel',
      continue: 'Continue',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      add: 'Add',
      addNew: 'Add New',
      submit: 'Submit',
      resetPassword: 'Reset password',
      changePassword: 'Change password',
      didNotReceiveCode: "Didn't receive the code?",
      greatContinue: "Great, let's continue",
      authenticate: 'Authenticate',
      confirm: 'Confirm',
    },
    verifications: {
      phone: {
        header: 'Verification',
        title: 'Verify your number',
        subtitle: 'Enter the 6-digit code we sent to your phone number',
        expiring: 'The code will expire in: ',
        errors: {
          invalidCode: 'Invalid code',
        },
      },
      email: {
        header: 'Verification',
        title: 'Verify your email',
        subtitle: 'Enter the 6-digit code we sent to your email',
        expiring: 'The code will expire in: ',
        errors: {
          invalidCode: 'Invalid code',
        },
      },
    },
  },
};

export { es };
