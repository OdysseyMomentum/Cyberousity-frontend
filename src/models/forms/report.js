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
    },
    items: {
        victimType: {
            label: "Who are you reporting to?",
            values: ['Myself', 'Someone else', 'A business/organisation']},
        privacyLevel: {
            label: "Who should see your report?",
            tags: ['Anonymous', 'The police'],
            values: ['Anonymous', 'Non-Anonymous']},
        problemCategory: {
            label: "Which category fits your case the most?",
            tags: [],
            values: [
            'An impersonator',
            'Job or opportunity to gain money',
            'Phone, Internet, TV service',
            'Health',
            'Disturbing calls',
            'Online shopping',
            'Prize, lottery',
            'Auto sale, repair',
            'Credit debt',
            'Something else'],},
        problemCategoryOrganisation: {
            label: "Which category fits yours case the most?",
            values: [
                'Bank Account',
                'Hacking, viruses or malware',
                'Fraud by employees',
                'Fraud by customers',
                'Business identity theft',
                'Buying goods or services',
                'Payment card fraud or credit debt (for example: credit collection, debt report, loan etc.)',
                'Financial investment',
                'Something else'
            ]
        },
        problemSpecification: {
            impersonator: {
                question: 'Who were they pretending to be?',
                answers: [
                    'Grandchild, family member, friend',
                    'Someone from your workplace',
                    'Well known or trusted business (for example: bank, tech support, utility company)',
                    'Love interest (for example: someone form a dating site)',
                    'Charity cause or agency',
                ]
            },
            job: {
                question: 'What type of job or money-making opportunity was it?',
                answers: [
                    'Investment or Interment seminar',
                    'Entrepreneurship',
                    'Job scam, job listing or employment service',
                    'Pyramid scheme',
                ]
            },
            phone: {
                question: 'What type of service was it?',
                answers: [
                    'Computer tech or support service',
                    'Internet service',
                    'Privacy or data security concern',
                    'TV service',
                    'Cellular or landline phone service',
                ],
            },
            health: {
                question: 'What type of health service was it?',
                answers: [
                    'Any kind of treatment',
                    'Weight loss product or plan',
                    'Fake or misleading medical treatment or cure',
                    'Someone pretending to be wording with a government agency',
                    'Vacation or cruise',
                ]
            },
            prize: {
                question: 'What type of service was it?',
                answers: [
                    'Vacation or cruise',
                    'Lottery/Money prize',
                ]
            },
            autoSaleRepair: {
                question: 'What type of service was it?',
                answers: [
                    'New auto sales experience',
                    'Auto parts or repair',
                    'Used auto sales experience',
                    'Auto warranty',
                ]
            },
            credit: {
                question: 'What type of bank service was it?',
                answers: [
                    'Credit repair or debt relief service',
                    'Debt collection, credit card, credit reporting or banking',
                    'Company charging fees to get a credit card or loan',
                ]
            },
            bank: {
                question: 'How was the money taken?',
                answers: [
                    'Unknown how the transaction was made',
                    'Online Banking was hacked',
                    'Phone call or email',
                    'Tricked into making a payment',
                ]
            },
            hacking: {
                question: 'Could you offer more details about the incident?',
                answers: [
                    'My device was infected with a virus or malware',
                    'My service was hacked',
                    'Denial of Service Attack',
                    'Pyramid scheme',
                    'Other',
                ]
            },
            fraudEmployees: {
                question: 'What did the fraud involve?',
                answers: [
                    'Corporate employee fraud',
                    'Procurement fraud',
                    'Retaining a payment made in error',
                    'Someone pretending to be wording with a government agency',
                ]
            },
            fraudCustomers: {
                question: 'What did the fraud involve?',
                answers: [
                    'Non-payment of invoice',
                    'Cheque overpayment fraud',
                    'Retaining a payment made in error',
                    'Receipt, pricing or no intent to pay',
                    'Application fraud',
                    'Someone pretending to be wording with a government agency',
                ]
            },
            businessIdentityTheft: {
                question: 'What was stolen?',
                answers: [
                    'Your business',
                    'Some elses'
                ]
            },
            buyingGoodsServices: {
                question: 'What type of  service was it?',
                answers: [
                    'Online shopping or an auction',
                    'Property rental fraud',
                    'Insurance Broker fraud',
                    'Other buying or selling fraud',
                ]
            },
            paymentCard: {
                question: 'What type of bank service was it?',
                answers: [
                    'Credit repair or debt relief service',
                    'Debt collection, credit card, credit reporting or banking',
                    'Company charging fees to get a credit card or loan'
                ]
            },
            financialInvestment: {
                question: '',
                answers: []
            }
        }
    }
}

export default form