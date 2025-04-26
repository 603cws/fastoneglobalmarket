import Header from "../components/Header";
import InstantAccount from "../components/InstantAccount";
import TitleBgCenter from "../components/TitleBgCenter";

function DataProtection() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Data Protection Policy" },
  ];
  return (
    <div className="bg-[#030B20] relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute w-full top-0 left-0"
      />
      <Header mode={"light"} />
      {/* <TitleBgCenter
        title="Data Protection Policy"
        description=""
        // backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      /> */}
      <div className="lg:pb-20 lg:pt-8">
        <TitleBgCenter
          title="Data Protection Policy"
          description=""
          // backgroundImage="/images/bg-2.png"
          breadcrumbPaths={breadcrumbPaths}
        />
      </div>
      <section className="mt-5 pb-8 lg:pb-10">
        <div className="container mx-auto relative">
          <div className="row lg:pb-20">
            <div className="col-12 about-text text-[#B2B2B2] [&_ul]:list-disc [&_ul]:px-8 [&_ul]:list-outsides [&_ul]:space-y-1.5 space-y-2">
              <p>
                The Firm is committed to protecting and respecting your privacy.
                This policy sets out the basis on which any personal data we
                collect from you, or that you provide to us, will be processed,
                and stored by the Firm. Please read the following carefully to
                understand our views and practices regarding your personal data
                and how the Company will treat it. By using our website, you are
                agreeing to be bound by this Policy, however, you are free to
                withdraw your consent anytime by notifying us.
              </p>

              <h3 className="mt-7 text-white text-2xl">Privacy</h3>
              <p>
                We know that you are concerned with how we deal with your
                personal information. This privacy statement sets out our
                current policies and demonstrates our commitment to your
                privacy. Our privacy policy may change at any time in the future
                for compliance purposes. You agree to revisit this page
                regularly and your continued access to or use of the Website
                will represent your consent to these changes.
              </p>

              <h3 className="mt-7 text-white text-2xl">
                Purpose of the Data processing
              </h3>
              <p>
                We are required to maintain certain personal data about
                individuals for the purposes of satisfying our operational and
                legal obligations (to open an account, customer due diligence,
                money laundering prevention, transact business effectively and
                to safeguard your assets and your privacy). We recognise the
                importance of correct and lawful treatment of personal data as
                it helps to maintain confidence in our organisation and to
                ensure efficient and successful outcomes when using this data.
              </p>
              <p>
                We only use personal information as legally appropriate to
                provide you with a high quality of service and security. We may
                use the personal data collected from you to verify your identity
                and contact information. We may also use this information to
                establish and set up your trading account, issue an account
                number and a secure password, maintain your account activity,
                and contact you with account information. This information helps
                us improve our services, satisfy financial regulation, and
                inform you about new products, services or promotions that may
                be of interest to you.
              </p>
              <p>
                Personal data may consist of data kept on paper, computer, or
                other electronic media; all of which is protected under the
                Mauritius Data Protection Act 2017
              </p>

              <h3 className="mt-7 text-white text-2xl">
                Principles of the Data processing
              </h3>
              <p>All data is :</p>
              <ul>
                <li>Fairly and lawfully processed</li>
                <li>Processed with specified legal basis</li>
                <li>Adequate, relevant, and not excessive</li>
                <li>Not kept for longer than necessary</li>
                <li>Accurate</li>
                <li>
                  Processed in accordance with the individual's (data subject's)
                  rights
                </li>
                <li>Secure</li>
                <li>
                  Not transferred to other countries without adequate protection
                </li>
              </ul>

              <h3 className="mt-7">Personal Data We Collect</h3>
              <p>We may collect and process the following data about you:</p>
              <ul>
                <li>
                  Information that you provide by filling in forms on our
                  Website
                </li>
                <li>
                  Up-to-date data about yourself and your identity if you
                  register your personal details for our services
                </li>
                <li>
                  Details of your visits to our Website (including, but not
                  limited to, traffic data, location data, weblogs and other
                  communication data, and the resources that you access).
                </li>
              </ul>
              <p>
                The types of personal data that we may process, for instance,
                include information about current, past, and prospective clients
                and customers, website visitors, etc. with whom we have
                dealings. This information includes details required to
                communicate with you, including your name, mailing address,
                telephone number, email address, date of birth, ID, and your
                location information.
              </p>
              <p>
                We may also ask you for information when you report a problem
                with the Site. If you contact us, we may keep a record of that
                correspondence. We may also ask you to complete surveys that we
                use for research purposes, although you do not have to respond
                to them.
              </p>
              <p>
                You have choices about the data we collect. When you are asked
                to provide personal data, you may decline. You are also entitled
                to have the Firm erase your personal data, cease further
                dissemination of the data, and potentially have third parties
                halt processing of the data. The withdrawal of consent does not
                affect the lawfulness of processing based on consent before its
                withdrawal however, if you choose not to provide data that is
                necessary to provide a service or feature or to withdraw the
                data that is still relevant to original purposes of processing,
                you may not be able to use that service or feature.
              </p>
              <p>
                The data we collect depends on the context of your interactions
                with the Company, the choices you make, including your privacy
                settings, and the service and features you use.
              </p>
              <h3 className="mt-7 text-white text-2xl">Use of Cookies</h3>
              <p>
                Cookies are small text files sent from the Web server to your
                computer. We use cookies to assist us in securing your trading
                activities and to enhance the performance of our Website.
                Cookies used by us do not contain any personal information, nor
                do they contain account or password information. They merely
                allow the site to recognize that a page request comes from
                someone who has already logged on.
              </p>
              <p>
                We may share Website usage information about visitors to the
                Website with reputable advertising companies for targeting our
                Internet banner advertisements on this site and other sites. For
                this purpose, pixel tags (also called clear GIFs or web beacons)
                may be used to note the pages you have visited. The information
                collected by the advertising company using these pixel tags is
                not personally identifiable.
              </p>
              <p>
                To administer and improve our Website, we may use a third party
                to track and analyze usage and statistical volume information,
                including page requests, form requests, and click paths. The
                third party may use cookies to track behavior and may set
                cookies on behalf of us. These cookies do not contain any
                personally identifiable information.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Reasons We Share Personal Data
              </h3>
              <p>
                We share your personal data with your consent or as necessary to
                complete any transaction or provide any service you have
                requested or authorized. We also share data with:
              </p>
              <ul>
                <li>The Company's affiliates and subsidiaries</li>
                <li>With vendors working for us and/or on our behalf</li>
                <li>When required by law or to respond to legal processes</li>
                <li>To protect our clients</li>
                <li>
                  To maintain the security of our services; and to protect the
                  Firm's rights or property
                </li>
              </ul>
              <h3 className="mt-7 text-white text-2xl">
                Our Affiliates and Partners
              </h3>
              <p>
                We may share information with affiliates if the information is
                required to provide the product or service you have requested,
                or to provide you with the opportunity to participate in the
                products or services our affiliates offer. We may also forge
                partnerships and alliances, which may include joint marketing
                agreements, with other companies that offer high-quality
                products and services that might be of value to our Customers.
              </p>
              <p>
                To ensure that these products and services meet your needs and
                are delivered in a manner that is useful and relevant, we may
                share some information with partners, affiliates, and alliances.
                This allows them to better understand the offers that are most
                relevant and useful to you. The use of your personal information
                is limited to the purposes identified in our relationship with
                the partner or affiliate.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Non-affiliated third parties.
              </h3>
              <p>
                We do not sell, license, lease or otherwise disclose your
                personal information to any third party for any reason, except
                as described below.
              </p>

              <p>
                We reserve the right to disclose your personal information to
                third parties when required to do so by law to regulatory, law
                enforcement or other government authorities. We may also
                disclose your information as necessary to credit reporting or
                collection agencies. We may also disclose your information to
                non-affiliated third parties if it is necessary to protect the
                Company's rights or property.
              </p>

              <p>
                To help us improve our services to you, we may engage another
                business to help us to carry out certain internal functions such
                as account processing, fulfillment, client service, client
                satisfaction surveys or other data collection activities
                relevant to our business. We may also provide a party with
                Customer information from our database to help us to analyse and
                identify Customer needs and notify Customers of product and
                service offerings.
              </p>

              <p>
                Use of the shared information is strictly limited to the
                performance of the task we request and for no other purpose. All
                third parties with which we share personal information are
                required to protect personal information in a manner similar to
                the way we protect personal information. We use a variety of
                legal mechanisms, including contracts, to help insure your
                rights and protections.
              </p>

              <p>Restriction of responsibility</p>

              <p>
                If at any time you choose to purchase a product or service
                offered by another company, any personal information you share
                with that company will no longer be controlled under our Privacy
                Policy. We are not responsible for the privacy policies or the
                content of sites we link to and have no control of the use or
                protection of information provided by you or collected by those
                sites.
              </p>

              <p>
                Whenever you elect to link to a co-branded Web site or to a
                linked Web site, you may be asked to provide registration or
                other information. Please note that the information you are
                providing is going to a third party, and you should familiarise
                yourself with the privacy policy provided by that third party.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Access to Personal Data
              </h3>
              <p>
                All individuals who are the subject of personal data held by us
                are entitled to:
              </p>
              <ul>
                <li>Ask what information we hold about them and why</li>
                <li>Ask how to gain access to it</li>
                <li>Be informed how to keep it up to date</li>
                <li>Have inaccurate personal data corrected or removed</li>
                <li>
                  To receive the personal data concerning them, which they have
                  previously provided
                </li>
                <li>
                  Prevent us from processing information or request that it is
                  stopped if the processing of such data is likely to cause
                  substantial, unwarranted damage or distress to the individual
                  or others
                </li>
                <li>
                  Require us to ensure that no decision which significantly
                  affects an individual is solely based on an automated process
                  for the purposes of evaluating matters relating to them, such
                  as conduct or performance
                </li>
                <li>
                  Be informed that we are complying with the Mauritius Data
                  Protection Act 2017
                </li>
                <li>
                  If you cannot access certain information and personal data
                  collected by the Firm, you can always contact the Company at{" "}
                  <a href="mailto:support@fastoneglobalmarkets.com">
                    support@fastoneglobalmarkets.com
                  </a>
                  . We will respond to requests to access or delete your
                  personal data within 30 days.
                </li>
              </ul>

              <h3 className="mt-7 text-white text-2xl">
                Security of Personal Data
              </h3>
              <p>
                We maintain strict security standards and procedures with a view
                to preventing unauthorised access to your data by anyone,
                including our staff. We use leading technologies such as (but
                not limited to) data encryption, firewalls and server
                authentication to protect the security of your data. The
                hardware protection includes Cisco security products. The
                software protection tools include strict control mechanisms as
                follows: SSL 3, TLS 1.2 with keys equal or larger than 2048-bit.
                The Firm's staff and other third parties, whenever contracted to
                provide support services, are required to observe our privacy
                standards and to allow us to audit them for compliance
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Breach of Personal Data
              </h3>
              <p>
                In the case of a personal data breach, the Company shall without
                undue delay and, where feasible, not later than 72 hours after
                having become aware of it, notify the personal data breach to
                the FSC (Financial Services Commission) in Mauritius unless the
                personal data breach is unlikely to result in a risk to the
                rights and freedoms of natural persons.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Where Personal Data is stored and processed
              </h3>
              <p>
                Personal data collected by the Company may be stored and
                processed in your region or in any other country where the
                Company or its affiliates, subsidiaries or service providers
                maintain facilities.
              </p>
              <p>
                The storage location(s) are chosen to operate efficiently, to
                improve performance, and to create redundancies to protect the
                data in the event of an outage or other problem. We take steps
                to ensure that the data we collect under this privacy statement
                is processed according to the provisions of this statement and
                the requirements of applicable law wherever the data is located.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Retention of Personal Data
              </h3>
              <p>
                The Company retains personal data for as long as necessary to
                provide the services, or for other essential purposes such as
                complying with our legal obligations, including as an authorised
                financial services provider, resolving disputes, and enforcing
                our agreements. Because these needs can vary for different data
                types in the context of various products, actual retention
                periods may vary significantly. The criteria used to determine
                the retention periods include, for example:
              </p>

              <p>
                <strong>
                  The period of data processing needed to provide the services
                </strong>
                <br />
                This includes such things as maintaining and improving the
                performance of those services, keeping our systems secure, and
                maintaining appropriate business and financial records. This is
                the general rule that establishes the baseline for most data
                retention periods.
              </p>
              <p>
                <strong>
                  The data subject's consent for a longer retention period
                </strong>
                <br />
                If so, we will retain data in accordance with the consent.
              </p>
              <p>
                <strong>
                  The Firm is subject to a legal, contractual, or similar
                  obligation to retain the data
                </strong>
                <br />
                Mandatory data retention laws can be applied in the applicable
                jurisdiction, government orders to preserve data relevant to an
                investigation, or data that must be retained for the purposes of
                litigation.
              </p>
              <h3 className="mt-7 text-white text-2xl">
                Changes to this Privacy Policy
              </h3>
              <p>
                From time to time, we may update this Privacy Policy. In the
                event we materially change this Privacy Policy, the revised
                Privacy Policy will promptly be posted to the websites and we
                will post a notice on our websites informing you of such
                changes.
              </p>
              <p>
                You agree to accept posting of a revised Privacy Policy
                electronically on the Website as actual notice to you. Any
                dispute over our Privacy Policy is subject to this notice and
                our Customer Agreement.
              </p>
              <p>
                We encourage you to periodically check and review this policy so
                that you will always know what information we collect, how we
                use it, and to whom we disclose it. If you have any questions
                that this statement does not address, please contact us via
                support@fastoneglobalmarkets.com.
              </p>
              <h3 className="mt-7 text-white text-2xl">Contact</h3>
              <p>
                If you have a privacy concern, complaint or a question for the
                Data Protection Officer, please contact us via
                support@fastoneglobalmarkets.com. We will respond to questions
                or concerns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <InstantAccount />
    </div>
  );

  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleBgCenter
  //       title="Data Protection Policy"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //     <section className="mt-5">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-12 about-text">
  //             <p>
  //               The Firm is committed to protecting and respecting your privacy.
  //               This policy sets out the basis on which any personal data we
  //               collect from you, or that you provide to us, will be processed,
  //               and stored by the Firm. Please read the following carefully to
  //               understand our views and practices regarding your personal data
  //               and how the Company will treat it. By using our website, you are
  //               agreeing to be bound by this Policy, however, you are free to
  //               withdraw your consent anytime by notifying us.
  //             </p>

  //             <h3 className="mt-7">Privacy</h3>
  //             <p>
  //               We know that you are concerned with how we deal with your
  //               personal information. This privacy statement sets out our
  //               current policies and demonstrates our commitment to your
  //               privacy. Our privacy policy may change at any time in the future
  //               for compliance purposes. You agree to revisit this page
  //               regularly and your continued access to or use of the Website
  //               will represent your consent to these changes.
  //             </p>

  //             <h3 className="mt-7">Purpose of the Data processing</h3>
  //             <p>
  //               We are required to maintain certain personal data about
  //               individuals for the purposes of satisfying our operational and
  //               legal obligations (to open an account, customer due diligence,
  //               money laundering prevention, transact business effectively and
  //               to safeguard your assets and your privacy). We recognise the
  //               importance of correct and lawful treatment of personal data as
  //               it helps to maintain confidence in our organisation and to
  //               ensure efficient and successful outcomes when using this data.
  //             </p>
  //             <p>
  //               We only use personal information as legally appropriate to
  //               provide you with a high quality of service and security. We may
  //               use the personal data collected from you to verify your identity
  //               and contact information. We may also use this information to
  //               establish and set up your trading account, issue an account
  //               number and a secure password, maintain your account activity,
  //               and contact you with account information. This information helps
  //               us improve our services, satisfy financial regulation, and
  //               inform you about new products, services or promotions that may
  //               be of interest to you.
  //             </p>
  //             <p>
  //               Personal data may consist of data kept on paper, computer, or
  //               other electronic media; all of which is protected under the
  //               Mauritius Data Protection Act 2017
  //             </p>

  //             <h3 className="mt-7">Principles of the Data processing</h3>
  //             <p>All data is :</p>
  //             <ul>
  //               <li>Fairly and lawfully processed</li>
  //               <li>Processed with specified legal basis</li>
  //               <li>Adequate, relevant, and not excessive</li>
  //               <li>Not kept for longer than necessary</li>
  //               <li>Accurate</li>
  //               <li>
  //                 Processed in accordance with the individual's (data subject's)
  //                 rights
  //               </li>
  //               <li>Secure</li>
  //               <li>
  //                 Not transferred to other countries without adequate protection
  //               </li>
  //             </ul>

  //             <h3 className="mt-7">Personal Data We Collect</h3>
  //             <p>We may collect and process the following data about you:</p>
  //             <ul>
  //               <li>
  //                 Information that you provide by filling in forms on our
  //                 Website
  //               </li>
  //               <li>
  //                 Up-to-date data about yourself and your identity if you
  //                 register your personal details for our services
  //               </li>
  //               <li>
  //                 Details of your visits to our Website (including, but not
  //                 limited to, traffic data, location data, weblogs and other
  //                 communication data, and the resources that you access).
  //               </li>
  //             </ul>
  //             <p>
  //               The types of personal data that we may process, for instance,
  //               include information about current, past, and prospective clients
  //               and customers, website visitors, etc. with whom we have
  //               dealings. This information includes details required to
  //               communicate with you, including your name, mailing address,
  //               telephone number, email address, date of birth, ID, and your
  //               location information.
  //             </p>
  //             <p>
  //               We may also ask you for information when you report a problem
  //               with the Site. If you contact us, we may keep a record of that
  //               correspondence. We may also ask you to complete surveys that we
  //               use for research purposes, although you do not have to respond
  //               to them.
  //             </p>
  //             <p>
  //               You have choices about the data we collect. When you are asked
  //               to provide personal data, you may decline. You are also entitled
  //               to have the Firm erase your personal data, cease further
  //               dissemination of the data, and potentially have third parties
  //               halt processing of the data. The withdrawal of consent does not
  //               affect the lawfulness of processing based on consent before its
  //               withdrawal however, if you choose not to provide data that is
  //               necessary to provide a service or feature or to withdraw the
  //               data that is still relevant to original purposes of processing,
  //               you may not be able to use that service or feature.
  //             </p>
  //             <p>
  //               The data we collect depends on the context of your interactions
  //               with the Company, the choices you make, including your privacy
  //               settings, and the service and features you use.
  //             </p>
  //             <h3 className="mt-7">Use of Cookies</h3>
  //             <p>
  //               Cookies are small text files sent from the Web server to your
  //               computer. We use cookies to assist us in securing your trading
  //               activities and to enhance the performance of our Website.
  //               Cookies used by us do not contain any personal information, nor
  //               do they contain account or password information. They merely
  //               allow the site to recognize that a page request comes from
  //               someone who has already logged on.
  //             </p>
  //             <p>
  //               We may share Website usage information about visitors to the
  //               Website with reputable advertising companies for targeting our
  //               Internet banner advertisements on this site and other sites. For
  //               this purpose, pixel tags (also called clear GIFs or web beacons)
  //               may be used to note the pages you have visited. The information
  //               collected by the advertising company using these pixel tags is
  //               not personally identifiable.
  //             </p>
  //             <p>
  //               To administer and improve our Website, we may use a third party
  //               to track and analyze usage and statistical volume information,
  //               including page requests, form requests, and click paths. The
  //               third party may use cookies to track behavior and may set
  //               cookies on behalf of us. These cookies do not contain any
  //               personally identifiable information.
  //             </p>
  //             <h3 className="mt-7">Reasons We Share Personal Data</h3>
  //             <p>
  //               We share your personal data with your consent or as necessary to
  //               complete any transaction or provide any service you have
  //               requested or authorized. We also share data with:
  //             </p>
  //             <ul>
  //               <li>The Company's affiliates and subsidiaries</li>
  //               <li>With vendors working for us and/or on our behalf</li>
  //               <li>When required by law or to respond to legal processes</li>
  //               <li>To protect our clients</li>
  //               <li>
  //                 To maintain the security of our services; and to protect the
  //                 Firm's rights or property
  //               </li>
  //             </ul>
  //             <h3 className="mt-7">Our Affiliates and Partners</h3>
  //             <p>
  //               We may share information with affiliates if the information is
  //               required to provide the product or service you have requested,
  //               or to provide you with the opportunity to participate in the
  //               products or services our affiliates offer. We may also forge
  //               partnerships and alliances, which may include joint marketing
  //               agreements, with other companies that offer high-quality
  //               products and services that might be of value to our Customers.
  //             </p>
  //             <p>
  //               To ensure that these products and services meet your needs and
  //               are delivered in a manner that is useful and relevant, we may
  //               share some information with partners, affiliates, and alliances.
  //               This allows them to better understand the offers that are most
  //               relevant and useful to you. The use of your personal information
  //               is limited to the purposes identified in our relationship with
  //               the partner or affiliate.
  //             </p>
  //             <h3 className="mt-7">Non-affiliated third parties.</h3>
  //             <p>
  //               We do not sell, license, lease or otherwise disclose your
  //               personal information to any third party for any reason, except
  //               as described below.
  //             </p>

  //             <p>
  //               We reserve the right to disclose your personal information to
  //               third parties when required to do so by law to regulatory, law
  //               enforcement or other government authorities. We may also
  //               disclose your information as necessary to credit reporting or
  //               collection agencies. We may also disclose your information to
  //               non-affiliated third parties if it is necessary to protect the
  //               Company's rights or property.
  //             </p>

  //             <p>
  //               To help us improve our services to you, we may engage another
  //               business to help us to carry out certain internal functions such
  //               as account processing, fulfillment, client service, client
  //               satisfaction surveys or other data collection activities
  //               relevant to our business. We may also provide a party with
  //               Customer information from our database to help us to analyse and
  //               identify Customer needs and notify Customers of product and
  //               service offerings.
  //             </p>

  //             <p>
  //               Use of the shared information is strictly limited to the
  //               performance of the task we request and for no other purpose. All
  //               third parties with which we share personal information are
  //               required to protect personal information in a manner similar to
  //               the way we protect personal information. We use a variety of
  //               legal mechanisms, including contracts, to help insure your
  //               rights and protections.
  //             </p>

  //             <p>Restriction of responsibility</p>

  //             <p>
  //               If at any time you choose to purchase a product or service
  //               offered by another company, any personal information you share
  //               with that company will no longer be controlled under our Privacy
  //               Policy. We are not responsible for the privacy policies or the
  //               content of sites we link to and have no control of the use or
  //               protection of information provided by you or collected by those
  //               sites.
  //             </p>

  //             <p>
  //               Whenever you elect to link to a co-branded Web site or to a
  //               linked Web site, you may be asked to provide registration or
  //               other information. Please note that the information you are
  //               providing is going to a third party, and you should familiarise
  //               yourself with the privacy policy provided by that third party.
  //             </p>
  //             <h3 className="mt-7">Access to Personal Data</h3>
  //             <p>
  //               All individuals who are the subject of personal data held by us
  //               are entitled to:
  //             </p>
  //             <ul>
  //               <li>Ask what information we hold about them and why</li>
  //               <li>Ask how to gain access to it</li>
  //               <li>Be informed how to keep it up to date</li>
  //               <li>Have inaccurate personal data corrected or removed</li>
  //               <li>
  //                 To receive the personal data concerning them, which they have
  //                 previously provided
  //               </li>
  //               <li>
  //                 Prevent us from processing information or request that it is
  //                 stopped if the processing of such data is likely to cause
  //                 substantial, unwarranted damage or distress to the individual
  //                 or others
  //               </li>
  //               <li>
  //                 Require us to ensure that no decision which significantly
  //                 affects an individual is solely based on an automated process
  //                 for the purposes of evaluating matters relating to them, such
  //                 as conduct or performance
  //               </li>
  //               <li>
  //                 Be informed that we are complying with the Mauritius Data
  //                 Protection Act 2017
  //               </li>
  //               <li>
  //                 If you cannot access certain information and personal data
  //                 collected by the Firm, you can always contact the Company at{" "}
  //                 <a href="mailto:support@fastoneglobalmarkets.com">support@fastoneglobalmarkets.com</a>
  //                 . We will respond to requests to access or delete your
  //                 personal data within 30 days.
  //               </li>
  //             </ul>

  //             <h3 className="mt-7">Security of Personal Data</h3>
  //             <p>
  //               We maintain strict security standards and procedures with a view
  //               to preventing unauthorised access to your data by anyone,
  //               including our staff. We use leading technologies such as (but
  //               not limited to) data encryption, firewalls and server
  //               authentication to protect the security of your data. The
  //               hardware protection includes Cisco security products. The
  //               software protection tools include strict control mechanisms as
  //               follows: SSL 3, TLS 1.2 with keys equal or larger than 2048-bit.
  //               The Firm's staff and other third parties, whenever contracted to
  //               provide support services, are required to observe our privacy
  //               standards and to allow us to audit them for compliance
  //             </p>
  //             <h3 className="mt-7">Breach of Personal Data</h3>
  //             <p>
  //               In the case of a personal data breach, the Company shall without
  //               undue delay and, where feasible, not later than 72 hours after
  //               having become aware of it, notify the personal data breach to
  //               the FSC (Financial Services Commission) in Mauritius unless the
  //               personal data breach is unlikely to result in a risk to the
  //               rights and freedoms of natural persons.
  //             </p>
  //             <h3 className="mt-7">
  //               Where Personal Data is stored and processed
  //             </h3>
  //             <p>
  //               Personal data collected by the Company may be stored and
  //               processed in your region or in any other country where the
  //               Company or its affiliates, subsidiaries or service providers
  //               maintain facilities.
  //             </p>
  //             <p>
  //               The storage location(s) are chosen to operate efficiently, to
  //               improve performance, and to create redundancies to protect the
  //               data in the event of an outage or other problem. We take steps
  //               to ensure that the data we collect under this privacy statement
  //               is processed according to the provisions of this statement and
  //               the requirements of applicable law wherever the data is located.
  //             </p>
  //             <h3 className="mt-7">Retention of Personal Data</h3>
  //             <p>
  //               The Company retains personal data for as long as necessary to
  //               provide the services, or for other essential purposes such as
  //               complying with our legal obligations, including as an authorised
  //               financial services provider, resolving disputes, and enforcing
  //               our agreements. Because these needs can vary for different data
  //               types in the context of various products, actual retention
  //               periods may vary significantly. The criteria used to determine
  //               the retention periods include, for example:
  //             </p>

  //             <p>
  //               <strong>
  //                 The period of data processing needed to provide the services
  //               </strong>
  //               <br />
  //               This includes such things as maintaining and improving the
  //               performance of those services, keeping our systems secure, and
  //               maintaining appropriate business and financial records. This is
  //               the general rule that establishes the baseline for most data
  //               retention periods.
  //             </p>
  //             <p>
  //               <strong>
  //                 The data subject's consent for a longer retention period
  //               </strong>
  //               <br />
  //               If so, we will retain data in accordance with the consent.
  //             </p>
  //             <p>
  //               <strong>
  //                 The Firm is subject to a legal, contractual, or similar
  //                 obligation to retain the data
  //               </strong>
  //               <br />
  //               Mandatory data retention laws can be applied in the applicable
  //               jurisdiction, government orders to preserve data relevant to an
  //               investigation, or data that must be retained for the purposes of
  //               litigation.
  //             </p>
  //             <h3 className="mt-7">Changes to this Privacy Policy</h3>
  //             <p>
  //               From time to time, we may update this Privacy Policy. In the
  //               event we materially change this Privacy Policy, the revised
  //               Privacy Policy will promptly be posted to the websites and we
  //               will post a notice on our websites informing you of such
  //               changes.
  //             </p>
  //             <p>
  //               You agree to accept posting of a revised Privacy Policy
  //               electronically on the Website as actual notice to you. Any
  //               dispute over our Privacy Policy is subject to this notice and
  //               our Customer Agreement.
  //             </p>
  //             <p>
  //               We encourage you to periodically check and review this policy so
  //               that you will always know what information we collect, how we
  //               use it, and to whom we disclose it. If you have any questions
  //               that this statement does not address, please contact us via
  //               support@fastoneglobalmarkets.com.
  //             </p>
  //             <h3 className="mt-7">Contact</h3>
  //             <p>If you have a privacy concern, complaint or a question for the Data Protection Officer, please contact us via support@fastoneglobalmarkets.com. We will respond to questions or concerns within 30 days.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default DataProtection;
