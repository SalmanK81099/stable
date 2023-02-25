/* eslint-disable import/prefer-default-export */
const en = {
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

        currencies: {
          title: 'Currencies',
          step1: {
            title: 'Current currencies',
          },
        },
        support: { title: 'Support' },
        legal: { title: 'Legal' },
        accountInfo: {
          title: 'Account Info',
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
        cashOut: {
          title: 'Cash Out',
          step1: {
            title: 'How much will you withdrawal?',
          },
        },
      },
      account: {
        movements: {
          title: 'Movements',
          step1: {
            tabs: {
              all: 'All',
              moneyAdded: 'Money added',
              moneySent: 'Money sent',
            },
          },
          step2: {
            added: 'added',
            sent: 'sent',
            received: 'received',
            withdrawed: 'withdrawed',
            sentTo: 'Sent to: ',
            accountNumber: 'Account number: ',
            timeAndDate: 'Time and date: ',
            exchangeRate: 'Exchange rate: ',
          },
        },
        send: {
          title: 'Send',
        },
        add: {
          title: 'Add',
        },
      },
      qr: {
        header: 'My QR',
        error: {
          notValid: 'No valid QR code detected',
        },
      },
    },
  },

  components: {
    bottomTabs: {
      main: {
        home: 'Home',
        account: 'Account',
        card: 'Card',
      },
    },
    headers: {
      verification: 'Verification',
      profile: 'Profile',
      details: 'Details',
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
      checkboxes: {
        agreeToTerms: 'I agree to the Terms of Service and Privacy Policy',
      },
    },
    switches: {
      enableFaceId: 'Enable Face ID',
      freezeCard: 'Freeze card',
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
      termsAndConditions: 'Terms and Conditions',
      privacyPolicy: 'Privacy Policy',
      talkToCoverage: 'Talk to Coverage',
      faq: 'FAQ',
      about: 'About ',
      downloadVoucher: 'Download voucher',
      blockCard: 'Block card',
      changeCardPin: 'Change card PIN',
      scanQRCode: 'Scan a QR code',
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

export { en };
