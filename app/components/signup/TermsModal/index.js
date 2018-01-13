/**
*
* TermsModal
*
*/

import React from 'react';
import Modal from 'react-modal';
import X from 'assets/images/exit.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '20px',
  },
};

function TermsModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Eventmakr Terms & Conditions"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ float: 'right', cursor: 'pointer' }} />
        <p style={{ textAlign: 'justify', maxHeight: '350px', maxWidth: '500px', overflowX: 'scroll', fontSize: '12px', marginBottom: '2em' }}><span style={{ fontWeight: 'bold', textAlign: 'center' }}>Eventmakr Terms of Use</span> <br />

Agreement between user and http://www.eventmakr.com <br />
Welcome to http://www.eventmakr.com. The http://www.eventmakr.com website (the "Site") is comprised of various web pages operated by Eventmakr ("EMR"). http://www.eventmakr.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of http://www.eventmakr.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference. <br />

http://www.eventmakr.com is a E-commerce Site <br />
An ordering platform for events, parties, and gatherings; focusing on local vendors <br />

Privacy <br />
Your use of http://www.eventmakr.com is subject to EMR's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices. <br />

Electronic Communications <br />
Visiting http://www.eventmakr.com or sending emails to EMR constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing. <br />

Your account <br />
If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that EMR is not responsible for third party access to your account that results from theft or misappropriation of your account. EMR and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion. <br />

EMR does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use http://www.eventmakr.com only with permission of a parent or guardian. <br />

Cancellation/Refund Policy <br />
You may cancel your memebership at any time. Vendors may cancel their memebership at anytime. Cancellations after the 15th of the month will not be refunded for the currrent month. For consumers our platform fee will not be refunded at a subscription cancellation. <br />

Links to third party sites/Third party services <br />
http://www.eventmakr.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of EMR and EMR is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. EMR is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by EMR of the site or any association with its operators. <br />

Certain services made available via http://www.eventmakr.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the http://www.eventmakr.com domain, you hereby acknowledge and consent that EMR may share such information and data with any third party with whom EMR has a contractual relationship to provide the requested product, service or functionality on behalf of http://www.eventmakr.com users and customers. <br />

No unlawful or prohibited use/Intellectual Property <br />
You are granted a non-exclusive, non-transferable, revocable license to access and use http://www.eventmakr.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to EMR that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. <br />

All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of EMR or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto. <br />

You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. EMR content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of EMR and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of EMR or our licensors except as expressly authorized by these Terms. <br />

Use of communication services <br />
The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"), you agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service. <br />

By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents; upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; conduct or forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded, restrict or inhibit any other user from using and enjoying the Communication Services; violate any code of conduct or other guidelines which may be applicable for any particular Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without their consent; violate any applicable laws or regulations. <br />

EMR has no obligation to monitor the Communication Services. However, EMR reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. EMR reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. <br />

EMR reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in EMR's sole discretion. <br />

Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. EMR does not control or endorse the content, messages or information found in any Communication Service and, therefore, EMR specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized EMR spokespersons, and their views do not necessarily reflect those of EMR. <br />

Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you upload the materials. <br />

Materials provided to http://www.eventmakr.com or posted on any EMR web page <br />
EMR does not claim ownership of the materials you provide to http://www.eventmakr.com (including feedback and suggestions) or post, upload, input or submit to any EMR Site or our associated services (collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting EMR, our affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission. <br />

No compensation will be paid with respect to the use of your Submission, as provided herein. EMR is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in EMR's sole discretion. <br />

By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions. <br />

Third Party Accounts <br />
You will be able to connect your EMR account to third party accounts. By connecting your EMR account to your third party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). If you do not want information about you to be shared in this manner, do not use this feature. <br />

International Users <br />
The Service is controlled, operated and administered by EMR from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the EMR Content accessed through http://www.eventmakr.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations. <br />

Indemnification <br />
You agree to indemnify, defend and hold harmless EMR, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorneys' fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. EMR reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with EMR in asserting any available defenses. <br />

Liability disclaimer <br />
THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. EVENTMAKR AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. <br />

EVENTMAKR AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. EVENTMAKR AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. <br />

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EVENTMAKR AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF EVENTMAKR OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE. <br />

Termination/access restriction <br />
EMR reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of California and you hereby consent to the exclusive jurisdiction and venue of courts in California in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section. <br />

You agree that no joint venture, partnership, employment, or agency relationship exists between you and EMR as a result of this agreement or use of the Site. EMR's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of EMR's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by EMR with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. <br />

Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and EMR with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and EMR with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent an d subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English. <br />

Changes to Terms <br />
EMR reserves the right, in its sole discretion, to change the Terms under which http://www.eventmakr.com is offered. The most current version of the Terms will supersede all previous versions. EMR encourages you to periodically review the Terms to stay informed of our updates. <br />

Contact Us <br />
EMR welcomes your questions or comments regarding the Terms: <br />

Eventmakr <br />
929 Colorado Avenue <br />
Santa Monica, California 90401 <br />


Email Address: <br />
subscriptions@eventmakr.com <br />

Telephone number: <br />
18776643932 <br />

Effective as of March 12, 2017 <br />

</p>
      </Modal>
    </div>
  );
}

export default TermsModal;
