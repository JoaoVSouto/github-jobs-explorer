<template>
  <div class="container">
    <div class="left-content">
      <RouterLink to="/" class="go-back">
        <i class="material-icons">arrow_right_alt</i>
        Back to search
      </RouterLink>

      <div class="how-to-apply">
        <h5>How to apply</h5>
        <p>
          Please email a copy of your resume and online portfolio to
          <a href="mailto:wes@kasisto.com">wes@kasisto.com</a> & CC
          <a href="mailto:wes@kasisto.com">eric@kasisto.com</a>
        </p>
      </div>
    </div>
    <div class="right-content">
      <div class="job-title-type">
        <h2>Front-End Software Engineer</h2>
        <span>Full Time</span>
      </div>

      <p class="created-at">
        <i class="material-icons">schedule</i>
        5 days ago
      </p>

      <div class="company-info">
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="kasisto"
          class="company-info__logo"
        />

        <div class="company-info__name-place">
          <strong>Kasisto</strong>
          <span>
            <i class="material-icons">public</i>
            New York
          </span>
        </div>
      </div>

      <div class="job-description">
        <p><strong>THRIVE WITH AGILOFT</strong></p>

        <p>
          Are you an experienced QA Automation Engineer who is successful,
          motivated, smart, energetic, and looking for a rewarding position in a
          growing, profitable, and dynamic company?
        </p>

        <p>
          Agiloft is expanding our developer team, looking for QA Automation
          Engineers hat thrive working with enterprises in multiple industries,
          with unique business challenges requiring sophisticated solution design.
        </p>

        <p><strong>WHY JOIN AGILOFT?</strong></p>

        <ul>
          <li>
            <p>
              Agiloft was named the market leader in every category in the
              <a
                href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf"
                >Gartner Critical Capabilities for CLM report</a
              >, and a market leader in the Gartner Magic Quadrant.
            </p>
          </li>

          <li>
            <p>
              Contract Lifecycle Management (CLM) is one of the fastest-growing
              areas of enterprise sales, with a TAM projected to climb from $2B to
              $7B in the next 5 years.
            </p>
          </li>

          <li>
            <p>
              The Agiloft Contract and Commerce Lifecycle Platform has won over
              <a href="https://www.agiloft.com/awards.htm"
                >a dozen awards, including the Editor's Choice award from PC
                Mag</a
              >, for the past five years in a row.
            </p>
          </li>

          <li>
            <p>
              Agiloft has a highly differentiated value proposition which is
              uniquely appealing to enterprises: pre-built applications with a
              deeply configurable, no-code platform for integrated Business
              Process Management throughout an organization.
            </p>
          </li>

          <li>
            <p>
              Agiloft is pioneering the applied use of Artificial Intelligence to
              enable next-generation business commerce at organizations ranging
              from small enterprises to U.S. government agencies and Fortune 100
              companies.
            </p>
          </li>

          <li>
            <p>
              Agiloft is the only company in the industry with the confidence to
              provide an unconditional satisfaction guarantee, and you too will be
              successful with Agiloft.
            </p>
          </li>
        </ul>

        <p>
          As the leader in the CCLM market, Agiloft is winning many Enterprise
          deals and looking to hire the best talent to meet this demand with a
          competitive compensation plan that rewards overachievement.
        </p>

        <p><strong>POSITION OVERVIEW</strong></p>

        <p>
          We are looking for a full-time QA Automation Engineer to help with
          manual and automated quality assurance of the Agiloft software platform.
          You should have no less than two years of professional experience in
          software testing and test automation. We also expect you to perform well
          working in a geographically distributed and diverse team.
        </p>

        <p><strong>Job Responsibilities</strong></p>

        <ul>
          <li>
            Write test scripts and scenarios to extend existing testing automation
            framework
          </li>

          <li>Advance and maintain the test automation framework</li>

          <li>
            Research and resolve any broken automation scripts that fail during
            execution
          </li>

          <li>
            Support manual QA testing efforts in conversion of manual test cases
            into automated ones
          </li>

          <li>Update test results in test tracking tool(s)</li>

          <li>Report, track, and manage any discovered defects to resolution</li>

          <li>
            Work effectively and collaboratively with other members on the product
            team
          </li>
        </ul>

        <p><strong>Required Qualifications</strong></p>

        <ul>
          <li>Solid experience with WATIR and/or Ruby/Selenium/Python</li>

          <li>
            2+ years of test automation experience in web/cloud services,
            applications, and platforms
          </li>

          <li>
            Experience with writing and executing detailed test cases, test plans
            and test design documents
          </li>

          <li>
            Experience with application (UI/API/Unit) automation tools, BDD
            automation tools, monitoring tools, performance testing tools, and
            automation technologies
          </li>

          <li>BS in Computer Science, Software Engineering or equivalent.</li>

          <li>Ability to speak and write in English</li>
        </ul>

        <p><strong>BENEFITS AND PERKS</strong></p>

        <ul>
          <li>Competitive salary</li>

          <li>Referral bonuses</li>

          <li>Flexible work schedules</li>

          <li>Professional development and career growth opportunities</li>

          <li>Awesome team members</li>
        </ul>

        <p><strong>To Apply</strong></p>

        <p>
          For immediate consideration, go to For immediate consideration, go to
          <a href="https://tinyurl.com/y2g63jvr"
            >https://www.agiloft.com/QAAutomationEngineer</a
          >
          to apply.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Job',
  setup() {
    const route = useRoute();
    const { id } = route.params;

    return {
      id,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 3.6rem;
  margin: 3.2rem 0;

  @include media(">=tablet") {
    grid-template-columns: 230px 1fr;
    gap: 6vw;
  }

  a {
    color: $primary;

    &:hover,
    &:focus {
      color: darken($primary, 5%);
    }

    &:active {
      color: darken($primary, 10%);
    }
  }

  .left-content {
    a.go-back {
      display: flex;
      align-items: center;
      font: $medium 1.4rem $poppins;
      transition: color 0.2s;

      i.material-icons {
        transform: rotate(180deg);
        margin-right: 1.2rem;
      }
    }

    .how-to-apply {
      h5 {
        margin: 3.6rem 0 1.6rem;
        font: $bold 1.4rem $poppins;
        text-transform: uppercase;
        color: $tertiary;
      }

      p {
        font: $medium 1.4rem $poppins;
        color: $secondary;
      }
    }
  }

  .right-content {
    .job-title-type {
      display: flex;
      flex-direction: column;

      h2 {
        font: $bold 2.4rem $roboto;
        color: $secondary;
      }

      span {
        align-self: flex-start;
        font: $bold 1.2rem $roboto;
        color: $secondary;
        border: 1px solid $secondary;
        border-radius: 4px;
        padding: 0.6rem 0.8rem;
        margin-top: 0.6rem;
      }

      @include media('>=tablet') {
        align-items: center;
        flex-direction: row;

        span {
          margin-top: 0;
          margin-left: 1.6rem;
        }
      }
    }

    p.created-at {
      display: flex;
      align-items: center;
      font: $medium 1.2rem $roboto;
      margin-top: 1rem;
      color: $tertiary;

      i.material-icons {
        font-size: 1.5rem;
        margin-right: 0.85rem;
      }
    }

    .company-info {
      margin-top: 3.5rem;
      display: flex;
      align-items: center;

      &__logo {
        height: 42px;
        width: 42px;
        border-radius: 4px;
        object-fit: contain;
        display: block;
      }

      &__name-place {
        display: flex;
        flex-direction: column;
        margin-left: 1.2rem;

        strong {
          font: $bold 1.8rem $roboto;
          color: $secondary;
        }

        span {
          display: flex;
          align-items: center;
          color: $tertiary;
          font: $medium 1.2rem $roboto;
          margin-top: 1rem;

          i.material-icons {
            margin-right: 0.75rem;
            font-size: 1.5rem;
          }
        }
      }
    }

    .job-description {
      margin-top: 3.2rem;
      font: $regular 1.6rem $roboto;
      color: $secondary;
      line-height: 2.4rem;

      * {
        margin-bottom: 1.6rem;
      }

      li {
        margin-left: 4rem;
      }
    }
  }
}
</style>
