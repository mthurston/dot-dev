import React from "react";

export const About = () => (
  <section className="about">
    <div className="about__content">
      <h2>About Matt</h2>
      <div class="about__content-intro">
        <p>
          Hello - my name is Matthew Thurston. I'm a Software Product Developer
          and Principal Software Engineer residing in Southwestern Ohio. I have
          many years of experience in the field of software development, and I'm
          passionate about building products that are useful and easy to use.
        </p>
      </div>
      <div className="about__content-fourthday">
        <h3>Fourth Day LLC</h3>
        <p>
          April 2018 – Present. Fourth Day provides software development and
          cloud strategy consulting services. My most recent project required
          delivery of cloud native applications using various Azure services,
          .NET Core 3.1 APIs, front-end frameworks which incorporated atomic
          design system and style guide. Relevant contributions to development
          effort with Fourth Day include but not limited to:
        </p>

        <ul>
          <li>
            Architect and deliver custom ERP system and operations responsive
            web applications using ASP.NET MVC and WebAPI with e2e async/await
            Task patterns, Azure SQL and CosmosDB Core (SQL) API, Data access
            and retrieval using LINQ, Entity Framework, and Dapper,
          </li>

          <li>
            Knowledge and contribution to enterprise architecture execution of
            asynchronous workloads, event broadcasting, and cold storage using
            Azure Queue Storage, Azure Event Service bus, and Azure Blob Storage
            respectively,
          </li>
          <li>
            Augment field work force capabilities using various Azure Search
            skillsets to implement features such as product type detection
            (Image Analysis) and parsing PDF forms (OCR),
          </li>
          <li>
            Leverage full e2e monitoring solution for customer “control room”
            experience using Azure Monitor augmented by Application Insights and
            Log Analytics, custom coding Event Telemetry to capture operational
            events. Meet disaster readiness and compliance criteria through
            custom Kusto queries of Azure Log Analytics exported as Power BI
            data sources,
          </li>
          <li>
            Development of front-end user experiences with a commitment to a11y
            following the WCAG 2.1 recommendation as a gold standard,
          </li>
          <li>
            Provision InfoSec and AppSec via Azure AD, Azure AD B2C with MFA,
            MSAL.js, Azure WAF, and Azure Firewall, and Azure Key Vault, and
          </li>
          <li>
            Champion a DevOps culture leveraging Azure DevOps as a platform for
            lean planning, peer review, continuous integration, and continuous
            deployment/delivery regarding changes to application source or cloud
            service infrastructure as code.
          </li>
        </ul>
      </div>
      <div className="about__content-readlist">
        <h3>Recommended Reading</h3>
        <p>
          Or rather, note to self on recommended <em>re-reading</em>.
        </p>
        <ul>
          <li>"Clean Code" by Robert Cecil Martin</li>
          <li>
            "The Pheonix Project: A Novel about IT, DevOps, and Helping your
            Business Win" by Gene Kim (Author), Kevin Behr (Author), George
            Spafford (Author)
          </li>
          <li>"The Pragmatic Programmer" by Andy Hunt and Dave Thomas</li>
          <li>"The 7 Habits of Highly Effective People" by Stephen Covey</li>
        </ul>
      </div>
    </div>
  </section>
);
