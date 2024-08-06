import Header from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Header/>

            <section className="w-full pb-10 max-md:px-4 md:w-1/3 mx-auto mt-5 md:mt-10 space-y-7 md:space-y-4">
                <h1 className="text-2xl font-semibold">Privacy Policy</h1>
                <p className='text-light-grey mt-4'>
                    Effective Date:  July 16,  2024
                </p>
                <h2 className="font-medium">1. Introduction</h2>
                <p className='text-light-grey mt-4'>
                    We are committed to protecting your privacy. This Privacy Policy explains how we Sonder Inc (“Sonder”) collect, use, disclose, and safeguard your information when you use our mobile application (“Our service”).  For the purposes of this Privacy Policy, ‘we’, ‘us’ and ‘our’ refers to Sonder  and ‘you’ refers to you, the user of the Service. Please read this policy carefully to understand our practices regarding your information and how we will treat it.
                </p>
                <h2 className="font-medium">2. Information We Collect</h2>
                <p className='text-light-grey mt-4'>
                    For a better experience, while using our Service, We may require you to provide us with certain personally identifiable information.
                </p>
                <p className='text-light-grey mt-4'>
                    We collect the following types of information when you use our service:
                </p>
                <p className='text-light-grey mt-4'>
                    <p className='font-bold'>Personal Information:</p> When you connect your Spotify account, we may collect your username, profile picture, and other profile information from Spotify to facilitate matching with other users.
                </p>
                <p className='text-light-grey mt-4'>
                    <p className='font-bold'>Usage Information: </p> We may collect information about how you use our services, such as your interactions with other users, preferences, and settings.
                </p>
                <h2 className="font-medium">3. How We Use Your Information</h2>
                <p className='text-light-grey mt-4'>
                    We use the information we collect in the following ways:
                </p>
                <p className='text-light-grey mt-4'>
                    • To personalize your experience 
                </p>
                <p className='text-light-grey mt-4'>• To improve our app and develop new features and services.</p>
                <p className='text-light-grey mt-4'>• To communicate with you, either directly or through partners, regarding updates, offers, and promotional materials.</p>
                <p className='text-light-grey mt-4'>• To provide customer support</p>
                <p className='text-light-grey mt-4'>• To detect, prevent and address technical issues</p>
                <p className='text-light-grey mt-4'>• To monitor the usage of our Service</p>
                <p className='text-light-grey mt-4'>• For any other purpose with your consent.</p>
                <p className='text-light-grey mt-4'>• In any other way we may describe when you provide the information</p>
                <h2 className="font-medium">4. Sharing Your Information</h2>
                <p className='text-light-grey mt-4'>We may share your information in the following circumstances:</p>
                <p className='text-light-grey mt-4'><p className='font-bold'>• With Your Consent:</p> We may share your information when you give us consent to do so.</p>
                <p className='text-light-grey mt-4'><p className='font-bold'>• Service Providers:</p> We may share your information with third-party service providers who help us provide and improve our services.</p>
                <p className='text-light-grey mt-4'><p className='font-bold'>• Legal Compliance:</p> We may disclose your information if required by law or to protect our rights or the rights of others.</p>
                <h2 className="font-medium">5. Cookies</h2>
                <p className='text-light-grey mt-4'>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.</p>
                <p className='text-light-grey mt-4'>This Service does not use these &quot;cookies&quot; explicitly. However, the app may use third-party code and libraries that use &quot;cookies&quot; to collect Information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                <h2 className="font-medium">6. Security of Your Information</h2>
                <p className='text-light-grey mt-4'>We take steps to protect your information using commercially reasonable safeguards to prevent unauthorized access, use, or disclosure but remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and We cannot guarantee its absolute security</p>
                <h2 className="font-medium">7. CI/CD tools</h2>
                <p className='text-light-grey mt-4'>We may use third-party Service Providers to automate the development process of our Service. </p>
                <p className='font-bold'>Github</p>
                <p className='text-light-grey mt-4'>
                    GitHub is provided by GitHub, Inc. 
                    {'\n\n'}
                    GitHub is a development platform to host and review code, manage projects, and build software.
                    {'\n\n'}
                    For more information on what data GitHub, Inc and GithHub collect for what purpose and how the protection of the data is ensured, please visit GitHub Privacy Policy page:  
                    {'\n\n'}
                    <Link 
                        target="_blank" 
                        href="https://help.github.com/en/github/site-policy/github-privacy-statement" 
                        className=""
                    >
                        https://help.github.com/en/github/site-policy/github-privacy-statement
                    </Link>
                </p>
                <h2 className="font-medium">8. Children&apos;s Privacy</h2>
                <p className='text-light-grey mt-4'>Our services are not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                <h2 className="font-medium">9. Links to Other Sites</h2>
                <p className='text-light-grey mt-4'>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.{'\n\n'}
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                </p>
                <h2 className="font-medium">10. Changes to This Privacy Policy</h2>
                <p className='text-light-grey mt-4'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or through our app</p>
                <h2 className="font-medium">11. Contact Us</h2>
                <p className='text-light-grey mt-4'>If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:fortunealebiosu710@gmail.com" className="text-primary"> fortunealebiosu710@gmail.com</Link></p>
            </section>
        </main>
    )
}