import Head from 'next/head'
import HomeLayout from "../components/HomeLayout";
import Hero from "../components/Main/hero";
import Projects from "../components/Projects/projects";
import Team from "../components/Team/team";
import Services from "../components/Services/services";
import Form from "../components/Form/checkout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Motion Web LLC</title>
        <meta name="description" content="Outsourcing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <HomeLayout>
            <Hero/>
            <Services/>
            <Projects/>
            <Team/>
            <Form/>
        </HomeLayout>

    </>
  )
}
