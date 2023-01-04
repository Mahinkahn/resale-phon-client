import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h3 className=" text-center mt-5 text-3xl font-bold">About US</h3>
            <div className="bg-secondary h-1 w-1/6 mx-auto"></div>
            <div className="set container mt-5 grid grid-cols-1 sm:grid-cols-2">

                <div>
                    <img
                        className="mt-5 ml-5 ml-5 rounded shadow-lg  w-full"
                        src="https://cdn.mgig.fr/2020/10/mg-15b8e255-w750.jpg"

                        alt=""
                        data-aos="fade-right" data-aos-duration="2000"
                    ></img>
                </div>
                <p className="m-5 pt-5 ml-8" data-aos="fade-left" data-aos-duration="2000">
                    <strong className='text-xl'>Apple aurait enregistré des précommandes pour 7 à 9 millions d'iPhone 12 et 12 Pro durant ce premier week-end, estime l'analyste Ming-Chi Kuo. </strong>
                    <br /><br></br>
                    « Les précommandes d'iPhone 12 Pro ont fait mieux que ce que l'on avait estimé du fait d'une préférence chez les fans de la première heure pour les modèles haut de gamme, d'une forte demande sur le marché chinois et de l'approche de la haute saison des ventes aux États-Unis et en Europe » écrit l'analyste.
                    <br /><br />
                    Avec le renfort prochain des iPhone 12 mini et iPhone 12 Pro Max, Apple pourrait totaliser un niveau exceptionnel de précommandes pour l'ensemble de la famille des iPhone 12 (les deux modèles restant seront en précommande le 6 novembre).
                </p>
            </div>
            <div className="sun container  mt-5 grid grid-cols-1 sm:grid-cols-2" style={{ marginTop: "120px", marginBottom: '100px' }}>
                <div>
                    <p className="m-5 pt-5 text-xl" data-aos="fade-right" data-aos-duration="2000">
                        <strong>Increase your profits by accepting all types of payments</strong>
                        <br /> <br />
                        Give your customers the options they want. From Apple Pay to Visa, we have the payment solutions designed to help your business grow.
                    </p>
                </div>

                <div>
                    <img
                        className="mt-5 ml-5 mr-5 rounded shadow-lg  w-96"
                        // src="https://img.freepik.com/premium-psd/cyber-monday-sale-composition-mock-up_23-2148659811.jpg?size=626&ext=jpg&uid=R75315196&ga=GA1.2.1721658491.1666825315&semt=sph"
                        src="https://www.pngitem.com/pimgs/m/582-5825810_payments-accepted-by-paylidify-we-accept-all-forms.png"
                        alt=""
                        data-aos="fade-left" data-aos-duration="2000"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;