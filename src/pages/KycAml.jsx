import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function KycAml() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "KYC/AML" },
  ];
  return (
    <div className="bg-[#030B20] relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0"
      />
      <Header mode={"light"} />
      <TitleBgCenter
        title="KYC/AML Policies"
        description=""
        // backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-5">
        <div className="container relative">
          <div className="row">
            <div className="col-12 about-text text-[#B2B2B2]">
              <p>
                FastOne Global Financial Markets Limited is committed to the
                highest standards of compliance against money laundering (AML)
                and anti-terrorist financing (CTF). The objective of the
                Companies Policy against Money Laundering and Terrorism
                Financing is to actively prevent the risks of these matters. To
                help the government combat the financing of terrorism and money
                laundering activities, the law requires all financial
                institutions to obtain, verify, and record information that
                identifies each person who opens an account. We have an
                obligation to report suspicious client activity relevant to
                money laundering.
              </p>
              <p>
                Money Laundering: The process of converting funds received from
                illegal activities (such as fraud, corruption, terrorism, etc.)
                into other funds or investments that appear legitimate to hide
                or distort the actual source of funds.
              </p>
              <h4 className="mt-4 text-white text-2xl">
                The money laundering process can be divided into three
                sequential stages:
              </h4>
              <ul>
                <li>
                  <strong>Placement:</strong> At this stage, the funds are
                  turned into financial instruments, such as checks, bank
                  accounts, and money transfers, or they can be used to buy
                  high-value goods that can be resold. They can also be
                  physically deposited in banks and non-bank institutions (e.g.,
                  exchange houses). To avoid suspicion, multiple smaller
                  deposits can be made instead of depositing the entire sum at
                  once; this form of placement is called smurfing.
                </li>

                <li>
                  <strong>Layers:</strong> The funds are transferred or moved to
                  other accounts and other financial instruments. This step is
                  done to disguise the origin of the funds and interrupt the
                  traceability of the entity that carried out the multiple
                  financial transactions. Moving funds and changing their form
                  makes it difficult to track the laundered money.
                </li>

                <li>
                  <strong>Integration:</strong> The funds are re-circulated as
                  legitimate to purchase goods and services. FastOne Global
                  Financial Markets Limited adheres to the principles of
                  Anti-Money Laundering (AML) and actively prevents any action
                  that facilitates the legalization of illegally obtained funds.
                  The AML policy prevents the use of the company's services for
                  money laundering, terrorist financing, or other criminal
                  activity. To prevent money laundering, FastOne Global
                  Financial Markets Limited does not accept or pay in cash under
                  any circumstances. The company reserves the right to suspend
                  the operations of any client that may be considered illegal or
                  related to money laundering.
                </li>
              </ul>
              <h4 className="mt-4 text-white text-2xl">Company procedures</h4>
              <p>
                FastOne Global Financial Markets Limited will ensure that it is
                a real or legal person. FastOne Global Financial Markets Limited
                also performs all the necessary measures in accordance with the
                applicable laws and regulations, issued by the monetary
                authorities. The AML policy is being met within FX of FastOne
                Global Financial Markets Limited by the following means:
              </p>
              <ul>
                <li>Know your client's policy and due diligence</li>
                <li>Monitor customer activity</li>
                <li>Registry mantenance</li>
              </ul>
              <p>
                Know Your Customer - Due to the company's commitment to AML and
                KYC policies, each company customer must complete a verification
                procedure. Before FastOne Global Financial Markets Limited
                initiates any cooperation with the client, the company ensures
                that satisfactory evidence is presented or other measures are
                taken that produce satisfactory proof of the identity of any
                client or counterparty. The company also applies increased
                scrutiny to clients, who are residents of other countries,
                identified by credible sources as countries, who have inadequate
                AML standards or who may pose a high risk of crime and
                corruption and beneficial owners who reside in and whose funds
                are sourced from named countries.
              </p>
              <h4 className="mt-4 text-white text-2xl">Individual clients</h4>
              <p>
                During the registration process, each client provides personal
                information, specifically: full name; birthdate; country of
                origin; and full residential address. The following documents
                are required to verify personal information: A client submits
                the following documents (in case the documents are written in
                non-Latin characters: to avoid delays in the verification
                process, it is necessary to provide a notarized translation of
                the document in English ) due to KYC requirements and to confirm
                the indicated information:
              </p>
              <ul>
                <li>
                  Valid passport (showing the first page of the local or
                  international passport, where the photo and signature are
                  clearly visible);
                </li>
                <li>Driving license with photograph;</li>
                <li>National identity card (showing the front and back);</li>
                <li>
                  Documents proving current permanent address (such as utility
                  bills, bank statements, etc.).
                </li>
              </ul>
              <p>
                containing the customer's full name and place of residence.
                These documents should not be older than 3 months from the
                filing date.
              </p>
              <h4 className="mt-4 text-white text-2xl">Corporate clients</h4>
              <p>
                In the event that the applicant company is listed on a
                recognized or approved stock exchange or when there is
                independent evidence to show that the applicant is a wholly
                owned subsidiary or a subsidiary under the control of said
                company, no further steps will normally be taken to verify the
                identity. necessary. In the event that the company is not listed
                and none of the main directors or shareholders already has an
                account with FastOne Global Financial Markets Limited, the
                following documentation must be provided:
              </p>
              <ul>
                <li>
                  Certificate of incorporation or any national equivalent;
                </li>
                <li>
                  Memorandum and Articles of Association and statutory
                  declaration or any national equivalent;
                </li>
                <li>
                  Certificate of good standing or other proof of the company's
                  registered address;
                </li>
                <li>
                  Resolution of the board of directors to open an account and
                  grant authority to those who will operate it;
                </li>
                <li>
                  Copies of powers of attorney or other authorities granted by
                  the directors in relation to the company;
                </li>
                <li>
                  Proof of the identity of the directors in case they deal with
                  FastOne Global Financial Markets Limited on behalf of the
                  Client (in accordance with the individual identity
                  verification rules described above);
                </li>
                <li>
                  Proof of identity of the final beneficiary(ies) and/or the
                  person(s) under whose instructions the signers of the account
                  are empowered to act (in accordance with the rules of
                  individual identity verification described above).
                </li>
              </ul>

              <h4 className="mt-4 text-white text-2xl">
                Tracking customer activity
              </h4>
              <p>
                In addition to collecting customer information, FastOne Global
                Financial Markets Limited continues to monitor the activity of
                each customer to identify and prevent any suspicious
                transactions. A suspicious transaction is known as a transaction
                that is not consistent with the legitimate business of the
                customer or with the transaction history of the regular customer
                known by tracking customer activity. FastOne Global Financial
                Markets Limited has implemented the named transactions
                monitoring system (both automatic and, if necessary, manual) to
                prevent criminals from using the company's services.
              </p>
              <h4 className="mt-4 text-white text-2xl">Registry maintenance</h4>
              <p>
                Records must be kept of all transaction data and data obtained
                for identification purposes, as well as all documents related to
                money laundering issues (e.g. suspicious activity reporting
                files, AML account monitoring documentation , etc.). Those
                records are kept for a minimum of 7 years after the account is
                closed.
              </p>
              <h4 className="mt-4 text-white text-2xl">Measures taken</h4>
              <p>
                In cases of an attempt to execute transactions that FastOne
                Global Financial Markets Limited suspects are related to money
                laundering or other criminal activity, it will proceed in
                accordance with applicable law and report the suspicious
                activity to the regulatory authority. FastOne Global Financial
                Markets Limited reserves the right to suspend the operation of
                any client, which may be considered illegal or may be related to
                money laundering in the opinion of the staff. FastOne Global
                Financial Markets Limited has full discretion to temporarily
                block the suspicious customer's account or terminate a
                relationship with an existing customer. For more information you
                can contact us at{" "}
                <strong>support@fastoneglobalmarkets.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KycAml;
