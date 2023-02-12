class CustomError extends Error {
  constructor(message, data) {
    super(message);
    this.data = data;
  }

  trigger() {
    /** abstract definition
     * will be integrated in the child errors
     */
  }
}

const Mailer = {
    sendBlock: (user) => console.log('sending block mail'),
    sendPermissionMissing: (user) => console.log('sending permission missing mail'),
}

class AuthorizationError extends CustomError {
  constructor(message, user, type) {
    super(message, user);
    this.type = type;
  }

  trigger(){
    super.trigger() // calling parent method
    switch (this.type) {
        case 'blocked':
            Mailer.sendBlock(this.data)
            break;
        case 'missingPermission':
            Mailer.sendPermissionMissing(this.data)
            break;
        default:
            break;
    }
  }
}

try {
    throw new AuthorizationError('your account is blocked',{
        name: 'test'
    }, 'missingPermission')
} catch (error) {
    if(error instanceof CustomError) {
        error.trigger()
    }
}