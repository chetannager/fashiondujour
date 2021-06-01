import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

const privacy = [
    {
        'heading': 'WHAT PERSONAL DATA DO WE PROCESS?',
        'description': 'We collect personal data when you (i) purchase cloths, accessories, cloths brands or other associated goods and/or services, (ii) sign up for news, invites and offers, (iii) request support and (iv) are browsing our website. Such personal data will include your name, e-mail address, telephone number, delivery address, payment details, IP address, behavior on the website and other information that you voluntarily provide us. If we deliver a gift card (or other product) to you which is purchased by someone else than you, we process your contact details as provided by the purchaser.',
        'content': [],
    },
    {
        'heading': 'PURPOSE, LEGAL GROUND AND STORAGE PERIOD',
        'description': 'We will only use your personal data for the purposes and on the legal grounds set out below. Further, we will only use your personal data during the period set out under "Storage period", after which period your personal data will be erased.',
        'content': [],
    },
    {
        'heading': 'PURCHASES',
        'description': '',
        'content': [
            {
                'sub-heading': 'Purpose of processing',
                'sub-description': ': When you purchase watches, accessories, watch bands, gift cards or other goods and/or services, we will process your personal data to fulfil our contractual obligations towards you (see Terms of Use).',
            },
            {
                'sub-heading': 'Categories of personal data',
                'sub-description': ': Identity (first name and second name), delivery address/billing address, telephone number, e-mail address, order information, payment details, payment history, credit card information and payment reference number.',
            },
            {
                'sub-heading': 'Legal ground for processing',
                'sub-description': ': The processing is necessary for our performance of the contract with you (i.e. Terms of Use).',
            },
            {
                'sub-heading': 'Storage period',
                'sub-description': ' : We will process your personal data during the term of our contract (including the statutory warranty period of three years) and we will thereafter erase your personal data. The storage period also applies to any unsuccessful purchase due to lack of funds in your account. We also save your personal data due to legal requirements (accounting legislation) for 7 years.',
            },
        ],
    },
    {
        'heading': 'SUPPORT',
        'description': '',
        'content': [
            {
                'sub-heading': 'Purpose of processing',
                'sub-description': ': When you request support through our live chat or our other support channels, we will process your personal data to be able to assist you with the relevant matter.',
            },
            {
                'sub-heading': 'Categories of personal data',
                'sub-description': ': Your name, e-mail address and other contact details, order details, purchase amount, purchase history, place of purchase, invoice, payment method, our correspondence with you, technical data about devices and operating system used. At your initiative, we may also process personal data such as ID, bank account details, work place, phone number, health data (such as allergy reactions or other health data that you provide us with), pictures attached by you or social status, if mentioned by you in our dialogue.',
            },
            {
                'sub-heading': 'Legal ground for processing',
                'sub-description': ': If we provide this service on the basis of an agreement with you, we consider the processing of your personal data to be necessary for the performance of the contract to which you are party. In other cases, we consider the processing of your personal data in the above context to be based on our legitimate interest to provide you with the best customer service possible.',
            },
            {
                'sub-heading': 'Storage period',
                'sub-description': ': We will erase your data within three years after the relevant matter has been finally resolved, except for sensitive data (such as ID, bank account details, health data (such as allergy reactions or other health data that you provide us with), pictures attached by you, social status, if mentioned by you in our dialogue) which will be erased immediately after your case has been resolved.',
            },
        ],
    },
    {
        'heading': 'CHECKOUT REMINDER',
        'description': '',
        'content': [
            {
                'sub-heading': 'Purpose of processing',
                'sub-description': ' : If you have initiated a purchase at our website and if you have provided your e-mail address in connection therewith but have not completed the final step of your purchase, we will send you an e-mail with a link to your shopping cart for the purposes of reminding you of your uncompleted purchase.',
            },
            {
                'sub-heading': 'Categories of personal data',
                'sub-description': ': Any details that you have entered in your shopping cart in connection with the uncompleted purchase (please refer to “Purchases” above for more details on what details we collect in connection with any purchase).',
            },
            {
                'sub-heading': 'Legal ground for processing',
                'sub-description': ': The processing is necessary for our and your legitimate interest to remind you of your uncompleted purchase.',
            },
            {
                'sub-heading': 'Storage period',
                'sub-description': ' : We will erase your data, within one month after the checkout reminder, unless there is another legal ground for keeping your data (such as a valid purchase contract). Opt-out is possible by contacting  dataprotection@danielwellington.com.',
            },
        ],
    },
    {
        'heading': 'BROWSING',
        'description': '',
        'content': [
            {
                'sub-heading': 'Purpose of processing',
                'sub-description': ' : When browsing our website, we will process your personal data to improve our website and for marketing purposes.',
            },
            {
                'sub-heading': 'Categories of personal data',
                'sub-description': ' : IP-address, user generated data from cookies (e.g. clicks, page viewed, page visits, time spent, products viewed and clicked on, orders, average order value).',
            },
            {
                'sub-heading': 'Legal ground for processing',
                'sub-description': ': The processing is based on the consent that you provide to us if you accept our Performance Cookies and Targeting Cookies (see “Cookies” below). In relation to Strictly Necessary Cookies, our processing is necessary for our legitimate interest in being able to provide you with a functioning website when you visit and use the services provided at DanielWellington.com. Please see more under “Cookies”.',
            },
            {
                'sub-heading': 'Storage period',
                'sub-description': ' : The storage period for each of our cookies can be found in our Cookie Settings',
            },
        ],

    },
    {
        'heading': 'FRAUD PREVENTION',
        'description': '',
        'content': [
            {
                'sub-heading': 'Purpose of processing',
                'sub-description': ' : We will process your personal data for the purposes of carrying out risk analysis, fraud prevention and risk management.',
            },
            {
                'sub-heading': 'Categories of personal data',
                'sub-description': '  : Identity (first name and second name), delivery address/billing address, telephone number, e-mail address, order history, payment history, purchase- and user generated data (clicks and user history), information about how our digital services are used.',
            },
            {
                'sub-heading': 'Legal ground for processing',
                'sub-description': ' : The processing is necessary for our legitimate interests to prevent fraud and to handle risks.',
            },
            {
                'sub-heading': 'Storage period',
                'sub-description': ' : We will erase any personal data used for this purpose on a six-month basis, unless there is another legal ground for keeping your data. Upon a purchase that has been cancelled due to fraud prevention, we will delete your personal data two years after the unsuccessful purchase.',
            },
        ],
    },
    {
        'heading': 'YOUR RIGHTS',
        'description': '',
        'content': [
            {
                'sub-heading': 'The right to access',
                'sub-description': ' : you may at any time request to access your personal data. Upon request, we will provide a copy of your personal data in a commonly used electronic form.',
            },
            {
                'sub-heading': 'The right to rectification',
                'sub-description': ' : you are entitled to obtain rectification of inaccurate personal data and to have incomplete personal data completed.',
            },
            {
                'sub-heading': 'The right to erasure (“right to be forgotten”)',
                'sub-description': ' : under certain circumstances (including processing on the basis of your consent), you may request us to delete your personal data. Please note that this right is not unconditional. Therefore, an attempt to invoke the right might not lead to an action from us.',
            },
            {
                'sub-heading': 'The right to object',
                'sub-description': ' : to certain processing activities conducted by the us in relation to your personal data, such as our processing of your personal data based on our legitimate interest. The right to object also applies to processing of your personal data for direct marketing purposes.',
            },
            {
                'sub-heading': 'The right to restriction of processing',
                'sub-description': ' : you may under certain circumstances request from us to restrict the processing of your personal data. Please note that this right is not unconditional. Therefore, an attempt to invoke the right might not lead to an action from us.',
            },
            {
                'sub-heading': 'The right to data portability',
                'sub-description': ' : you are entitled to receive your personal data (or have your personal data directly transmitted to another data controller) in a structured, commonly used and machine-readable format.',
            },
            {
                'sub-heading': '',
                'sub-description': 'Finally, you also have the right to lodge a complaint with the supervisory authority in India, which currently is Datainspector, under name change to Integralinspector.',
            },
        ],
    },
    {
        'heading': 'CHANGES TO THIS WEBSITE PRIVACY POLICY',
        'description': 'If we change how we handle your personal data or how we use cookies, we will promptly update this website privacy policy and publish it on this website .Last updated: 4th November 2020',
        'content': [],
    },

];

const Privacy = (props) => {
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="container mt-80">
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Privacy &nbsp;&amp;&nbsp; Policy</p>
                <hr className="mt-10 mb-40" style={{ width: '100px', borderTop: '2px solid rgba(0,0,0,0.8)' }} />

                {
                    privacy.map((data) => {
                        return <div>
                            <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.2)' }} />
                            <div className="row mt-20">
                                <div className="col-md-6">
                                    <p className="mb-10 text-dark" style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{data.heading + " :"}</p>
                                </div>
                                <div className="col-md-6">
                                    {
                                        (data.description == "" || data.description == null) ?
                                            <ul>
                                                {
                                                    data.content.map((rights) =>
                                                        <li style={{ marginBottom: '15px' }}>
                                                            <i style={{ fontWeight: '600' }}>{rights['sub-heading']}</i><span>{rights['sub-description']}</span>
                                                        </li>
                                                    )
                                                }

                                            </ul>
                                            : <p>{data.description}</p>
                                    }
                                </div>
                            </div>

                        </div>
                    })
                }
                <div className="mb-30" />

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Privacy
