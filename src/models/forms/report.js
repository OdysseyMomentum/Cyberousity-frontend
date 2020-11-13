const form = {
    details: {
        victimType: '',
        privacyLevel: '',
        problemCategory: '',
        scammerRequestedPayment: '',
        requestedPayment: {
            sum: '',
            cur: ''
        },
        paymentCompleted: '',
        scammerName: '',
        moreInfo: '',
        isDutchVictim: '',
        victimItems: {
            name: '',
            country: '',
            city: '',
            province: '',
            address: '',
            zip: '',
            phone: '',
            email: '',
        },
        furtherComments: ''
    },
    rules: {
        victimType: [() => true],
        privacyLevel: [() => true],
        problemCategory: [() => true],
        scammerRequestedPayment: [() => true],
        requestedPayment: {
            sum: [() => true],
            cur: [() => true]
        },
        paymentCompleted: [() => true],
        scammerName: [() => true],
        moreInfo: [() => true],
        isDutchVictim: [() => true],
        victimItems: {
            name: [() => true],
            country: [() => true],
            city: [() => true],
            province: [() => true],
            address: [() => true],
            zip: [() => true],
            phone: [() => true],
            email: [(v => v ? ( /.+@.+\..+/.test(v)) : true) || 'E-mail must be valid'],
        },
        furtherComments: [() => true]
    }
}

export default form