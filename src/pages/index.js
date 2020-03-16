import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/home-section"

import communications from "../images/coneflower-consulting-communications.svg"
import fundraising from "../images/coneflower-consulting-fundraising.svg"
import grantWriting from "../images/coneflower-consulting-grant-writing.svg"
import leadership from "../images/coneflower-consulting-leadership.svg"
import programming from "../images/coneflower-consulting-programming.svg"
import strategicPlanning from "../images/coneflower-consulting-strategic-planning.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-purple text-white py-16">
      <div className="max-w-3xl mx-auto text-lg">
        <p>
          Just as the flora and fauna of the Great Plains are shaped by the
          rolling prairies and rugged climate in which they exist, non-profits
          face special challenges and unique opportunities based on their
          geographic, cultural, and political environments. At Coneflower
          Consulting, we are committed to helping creative non-profits in the
          Midwest flourish. Whether your non-profit organization’s mission is in
          arts & culture, humanities, or education, we’re here to help you
          cultivate the resources you need to thrive.
        </p>
      </div>
    </div>
    <div className="container mt-16">
      <HomeSection
        img={programming}
        title="Programming"
        description="It’s what you do best.  But sometimes, even the experts need a fresh perspective or a little extra support.  Whether you’re taking your programming in new directions, serving new audiences, or meeting new objectives, we’ve got specialists in your area who can help.  We assist with online and in-person curriculum development for all ages, born-digital programming, creative placemaking projects, audience-building initiatives… If you can dream it, we can help make it a reality."
      />
      <HomeSection
        imgLast
        img={grantWriting}
        title="Grant Writing"
        description="Coneflower Consulting has brought over $4 million in grants to the Midwest in just over eight years. We have experience not only finding grant opportunities that are unique to creative non-profits in the Midwest but securing them through our expertise in program development, proposal writing, project management, budgeting, and evaluation. Whether you’re just starting to think about grant funding, need help writing and submitting a grant application, or want administrative support for a previously secured grant award, we can help."
      />
      <HomeSection
        img={fundraising}
        title="Fundraising"
        description="At Coneflower Consulting, we love helping non-profits raise money! We provide support in the development, implementation, and evaluation of campaigns for major gifts, planned gifts, and memberships. From database organization to board trainings, case statements to prospect research, we’ve got you covered."
      />
      <HomeSection
        imgLast
        img={communications}
        title="Communications"
        description="It’s hard to rally people around your mission if you can’t communicate it clearly and memorably. With a combined staff experience of over twenty years in marketing and promotions, Coneflower Consulting supports all your website, digital media, graphic design, copy writing, and print publication needs."
      />
      <HomeSection
        img={strategicPlanning}
        title="Strategic Planning"
        description="Before you invest in that big consulting firm from the coast, take a look closer to home. We know the Midwest non-profit ecosystem inside and out, and we’re here to help you make the most of all that it has to offer, today and tomorrow."
      />
      <HomeSection
        imgLast
        img={leadership}
        title="Leadership"
        description="We specialize in the challenges that come with leadership transitions and are well-equipped to help your organization navigate periods of change to end up stronger, more cohesive, and more motivated than ever! We work with staff, board members, and donors to ensure that all parties feel their needs are being met during times of transition, and we can also provide interim leadership and temporary staffing support."
      />
      <hr className="my-8 lg:my-16" />
      <h2 className="text-purple font-thin uppercase text-2xl">About Us</h2>
      <p className="mt-4">
        The humble coneflower is a common sighting amongst the prairie grasses
        of the Great Plains. Deceptively delicate-looking with its petals
        ranging in hue from dark magenta to light pink, the coneflower is
        actually a drought-tolerant perennial that uses its long taproot and
        affinity for sunlight to persevere and prosper across the Midwest.
      </p>
      <p className="mt-4">
        Coneflower Consulting was founded by Sarah Bishop, a longtime Kansan
        with a commitment to maintaining and expanding the vibrant creative,
        cultural, and educational community of the Midwest. Sarah received her
        PhD in literature and media from the University of Virginia and has over
        a decade of experience in grant writing, fundraising, communications,
        strategic planning, and leadership for Midwest non-profits and
        institutions of higher education. Sarah is excited to help your
        Midwestern non-profit build on its past successes to reach new heights.
      </p>
    </div>
  </Layout>
)

export default IndexPage
