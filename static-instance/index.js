class AwsCore {
    constructor(accessKey, accessSecret){
        // third party instance
        this.instance = {
            accessKey,
            accessSecret,
            save: (data) => console.log('saved')
        }
    }

    createRecord(data) {
        this.instance.save(data)
    }

    static fromEnv(){
        const accessKey = process.env.ACCESS_KEY
        const accessSecret = process.env.ACCESS_SECRET
        return new AwsCore(accessKey, accessSecret)
    }
}

const aws = AwsCore.fromEnv()
aws.createRecord({})