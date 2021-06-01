import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

const terms = [
    {
        'heading': 'INTRODUCTION',
        'description': 'These terms of use governs your purchases from, and your use of, the <a href="#">www.fashiondujour.com</a> website and forms a contract between you and JFT Trading (India) Private Limited, an Indian corporation with the company incorporation number U51909MH2017FTC296790, M II/112, Aliganj, Sector-c, Yojana Jankipuram, Sitapur Road, Lucknow, Uttar Pradesh, 226021 (hereinafter “Fashion-du-jour”). By making a purchase from, and using, this website you have agreed to these terms of use. Please make sure that you have read and understood these terms of use when using our site.',
    },
    {
        'heading': 'CONFIRMATION',
        'description': 'Once we have received your order we will send an electronic invoice to your e-mail address as a confirmation of your purchase. It is important that you enter the correct e-mail address when placing your order. We recommend saving this email in order to facilitate any contact with customer service you may have in the future. The order confirmation (receipt) also serves as guarantee of proof of purchase.',
    },
    {
        'heading': 'PAYMENT',
        'description': 'You may pay with either credit or debit cards, cash on delivery (“COD”), Unified Payments Interface (UPI), Net banking, and Wallets. Adyen banking services manages all of our banking transactions. Fashion-du-jour does not store any credit card numbers.',
    },
    {
        'heading': 'PAYMENT BY CARD',
        'description': 'Pay with your Visa, AMEX or MasterCard securely over the Internet. Your payment is handled by Adyen with secure encryption and under strict banking standards. Your card details are sent directly to the bank and cannot be read or accessed by anyone other than your bank. There is no extra charge for card payments. When paying by credit / debit card starting conditions apply as soon as the card transaction is approved. In the event that no payment has been received after submitting your order, Fashion-du-jour may automatically cancel your order.',
    },
    {
        'heading': 'PROMO CODES',
        'description': 'Promo Codes should be entered during the checkout process to be valid. Attempting to add a promo code after purchase will not be honored.',
    },
    {
        'heading': 'TAXES',
        'description': 'All prices shown at <a href="#">www.fashiondujour.com/in</a> are inclusive of any applicable alternate indirect tax (such as, but not limited to, Goods and Services Tax (GST)) in accordance with the applicable legislation. If the GST rate applicable or any other indirect tax rate on the date of the order is changed after the order has been made, the change will be reflected in the price of items without you being notified.',
    },
    {
        'heading': 'ORDERING',
        'description': 'Orders made in another persons name without his consent, or otherwise will be reported to the authorities. Fashion-du-jour holds the right to change prices, correct incorrect prices on all orders as well as final sales. If a price is incorrect, this may compel Fashion-du-jour to cancel the purchase and refund any amount paid in the best way. This can be performed at any time.<br/><br/> Consumers have the right to return the order for free within 30 days from receiving the order. The right applies only in the case that the product and its original packaging can be returned in the same condition as when received. If consumers use their right to send back an order they should contact Fashion-du-jour in order to get an address to send the goods to. If an item is damaged during transport, Fashion-du-jour should be contacted within 30 days for information about compensation.',
    },
    {
        'heading': 'PERSONAL INFORMATION',
        'description': 'When shopping with Fashion-du-jour we will save some of your data to fulfil your purchase. Fashion-du-jour treats all personal information confidential. You have the right to request access to your data and if there is anything wrong you can get it changed or removed. Fashion-du-jour may also use cookies, for example in order to improve your experience of the website. You can read more about how we use personal data and cookies here: <a href="#">www.fashiondujour.com/privacy-policy</a>.',
    },
    {
        'heading': 'PRODUCT INFORMATION',
        'description': 'Fashion-du-jour has the right to adjust prices, involve additional cost and change product information such as product pictures and offers without notice. The product images and information texts available reflect the product as much as possible. We reserve the right for any errors that may appear on the page and cannot guarantee that all pictures accurately reflect the true appearance of the watch. The pictures may differ depending on the colour settings in your computer. All pictures should be seen as illustrations only, and do not guarantee correct appearance and characteristics.',
    },
    {
        'heading': 'DELIVERY AND CANCELLATIONS',
        'description': 'Fashion-du-jour ships worldwide. Deliveries are made in cooperation with the postal services and their partners have the right to cancel purchases and return delivered goods by contacting Fashion-du-jour’s customer service or using the contact form on Fashion-du-jour’s website within 30 days from receiving the goods, provided the goods are unpacked and in the same condition as when you received them. However, the customer is responsible for the cost and risk for transporting the returned goods to Fashion-du-jour.<br/><br/> In cases, you as a customer believe that the delivery is delayed in such a way that you no longer wish to fulfil the order, it is your responsibility to cancel the order. In cases where the order has been dispatched, the customer is required to receive the order. Cancellation is not valid until the customer has confirmed with Fashion-du-jour either by email or telephone. If a product has been discontinued Fashion-du-jour has the right to cancel the purchase and refund the paid amount to the customer. Fashion-du-jour will notify the customer of a replacement or equivalent products if available.',
    },
    {
        'heading': 'COMPLAINTS TERMS',
        'description': 'It is important that you as a customer carefully check your goods / products when you receive your shipment in order to verify that the products are not damaged and correct. If your product is damaged in transport, whether the damage is visible or hidden, you must report this as soon as possible to the carrier. If you receive your item and see that it is damaged or does not match the one you ordered or, you shall also contact us within 30 days from receiving the product.<br/><br/> Any complaints shall be made to our customer service through our contact form on the contact page. Please supply the order number and the reason for complaint and we will get back to you shortly with instructions on how to return the item. Defective products returned to Fashion-du-jour should be treated as if they were faultless. It is in all types of returns extremely important that the product is packaged in such a way that it cannot be damaged during transit. In the case that a returned product has no errors or faults. Fashion-du-jour has the right to replace defective goods with goods of the same model. If the item has been discontinued, the customer will receive a full refund.',
    },
    {
        'heading': 'ADDITIONAL INFORMATION',
        'description': 'No transmission of data over the internet is guaranteed to be completely secure. It may be possible for third parties not under the control of Fashion-du-jour to intercept or access transmissions or private communications unlawfully. While we strive to protect your Personal Information, neither Fashion-du-jour nor any of our service providers can ensure or warrant the security of any information you transmit to us over the internet. Any such transmission is done at your own risk.',
    },
    {
        'heading': 'LIABILITY',
        'description': 'Fashion-du-jour responsibility for errors in connection to delivery is limited to existing conditions of sale. Fashion-du-jour bears no direct or indirect responsibility for example, but not limited to, incompatibility, delivery delays, downtime, data loss, additional work or other economic harm.',
    },
    {
        'heading': 'FORCE MAJEURE',
        'description': 'Fashion-du-jour shall be exempt from liability for damages and other penalties on the performance of the contract prevented, hindered or delayed by circumstances beyond our control. As the release factor should be considered include government intervention, new / amended legislation, lack of state, war, fire, flood, labour disturbance, prohibitions, restrictions, sabotage, poor transport or weather conditions or lack of delivery from suppliers and the company is exposed to criminal activity that affects activities.',
    },
    {
        'heading': 'INTELLECTUAL PROPERTY RIGHTS',
        'description': 'All intellectual property rights, such as trademarks and copyright, on the website and in the material published on it are owned by Fashion-du-jour or its subsidiaries or licensors. Any use of the site or its content, including copying or storing such content in whole or part, other than for your own personal, non-commercial use, is prohibited without the permission of Fashion-du-jour.',
    },
    {
        'heading': 'USER CONTENT',
        'description': 'The www.danielwellington.com website may include user generated content from for example social media applications. Fashion-du-jour does not claim any ownership in rights in such content (images, photos and videos etc.) and take no legal responsibility for it. In case you for suspect a violation of copyright, or any other right, or otherwise is offended by such content, please contact our customer service.',
    },
    {
        'heading': 'RETENTION OF TITLE',
        'description': 'All products remain in Fashion-du-jour property until full payment is made.',
    },
    {
        'heading': 'FRAUD',
        'description': 'All attempts at fraud reported to the authorities and Fashion-du-jour reserves the right to cancel the purchase if any suspicion is raised. ',
    },
    {
        'heading': 'GOVERNING LAW AND JURISDICTION',
        'description': 'These terms and your use of the <a href="#">www.fashiondujour.com</a> website are governed by Indian law. All disputes arising from the terms of use and your use of the website, shall be subject to jurisdiction of courts, tribunals or any other applicable forum at Mumbai.',
    },
    {
        'heading': 'TERMINATION',
        'description': 'Fashion-du-jour reserves the right to terminate your account and/or your use of the <a href="#">www.fashiondujour.com</a> website at its sole discretion. For example, if Fashion-du-jour suspects that you have breached these terms of use. Such termination can be made without prior notice.',
    },
    {
        'heading': 'AMENDMENTS',
        'description': 'Fashion-du-jour may revise these terms of use from time to time. Every time you order a product from us, the general conditions in force at that time will apply to the contract between you and Fashion-du-jour. You should therefore periodically visit this page to review the then current terms to which you are bound.<br/><br/> These terms of use were updated 30th DECEMBER 2020',
    },
];

const Terms = (props) => {
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="container mt-80">
                <p style={{ fontSize: '35px', fontWeight: '700' }}>Terms &nbsp;&amp;&nbsp; Conditions</p>
                <hr className="mt-10 mb-40" style={{ width: '100px', borderTop: '2px solid rgba(0,0,0,0.8)' }} />
                {
                    terms.map((term) => {
                        return <div className="mb-30">
                            <hr className="mt-10 mb-40" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                            <h5 className="mb-20" style={{ color: '#30252F' }}>{(terms.indexOf(term) + 1) + '.' + ' ' + term.heading}</h5>
                            <p style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '500', fontSize: '16px' }}>{ReactHtmlParser(term.description)}</p>
                        </div>
                    })
                }
                <div className="mb-60">
                    <hr className="mt-10 mb-40" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                    <h5 className="mb-20" style={{ color: '#30252F' }}>22. WARRANTY</h5>
                    <p style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '500', fontSize: '16px' }}>
                        Note that repair/replacements will be charged in the following cases, even during the warranty term.<br /><br />
                        <ul style={{ listStyleType: 'disc', paddingLeft: '17px' }}>
                            <li>Failure or damage caused by improper use or carelessness (knocks, dents, crushing, broken crystal, etc.)</li>
                            <li>Failure or damage caused by unjustifiable repair or modification</li>
                            <li>Failure or damage caused by fire or water, or a natural disaster such as for example an earthquake</li>
                            <li>Esthetic changes that occur during normal wear and tear and aging (minor scratches, etc.; on the case and/or crystal, alteration of the color on the wristband and the peeling of the plating)</li>
                            <li>In case the retail store and the purchase date are not indicated on the warranty, or if this information has been rewritten</li>
                            <li>If the warranty is not submitted along with the watch.</li>
                            <li>Battery replacement will be charged even during the warranty term.</li>
                        </ul><br /><br />
				The case, dial, hands, crystal, watchband or other parts thereof may be replaced with substitutes if the originals are not available.<br /><br />
				This warranty warrants that you can receive free replacement in accordance with the terms set forth herein and within the specified term, and shall not restrict any lawful right of the Customer.
                    </p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Terms
