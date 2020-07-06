<script>
  import Button from "./Button.svelte";
  import PricingTableCard from "./PricingTableCard.svelte";
</script>

<style>
  .pricing-table {
    background: #0043e0;
    width: 100%;
  }

  .container-fluid {
    max-width: 1200px;
  }

  .pricing-table__card-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pricing-table__card__price-text {
    white-space: nowrap;
    font-weight: 400;
    font-size: 20px;
    margin: 0 10px 5px 0;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .pricing-table__card__price-subtext {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.4;
    color: #666;
  }

  @media screen and (min-width: 768px) {
    .pricing-table {
      padding-top: 110px;
      padding-bottom: 110px;
    }

    .container-fluid {
      padding-left: 56px;
      padding-right: 56px;
    }
  }

  @media screen and (max-width: 767px) {
    .pricing-table {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .container-fluid {
      padding-left: 18px;
      padding-right: 18px;
    }
  }
</style>

<section class="pricing-table">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-4 pricing-table__card-wrapper">
        <PricingTableCard
          title="Free"
          description="Use all features of Authgear to boost your app's security
          and develop faster"
          features={['1,000 Monthly Active Users', '1 Day of Log Retention', 'Account remove if no activities for 60 days', 'No SLA', 'Community Support']} />
      </div>
      <div class="col-12 col-md-4 pricing-table__card-wrapper">
        <PricingTableCard
          title="Startups"
          description="Grow without pain and security"
          features={['1,000 Monthly Active Users', 'Up to 10 Days of Log Retention', 'AD, LDAP, SAML support', 'Passwordless Login / Verify by SMS', 'Email Support']}>
          <div slot="footer">
            <h3 class="pricing-table__card__price-text">USD 200</h3>
            <span class="pricing-table__card__price-subtext">
              +USD 20 per 1000 Monthly Active Users
            </span>
          </div>
        </PricingTableCard>
      </div>
      <div class="col-12 col-md-4 pricing-table__card-wrapper">
        <PricingTableCard
          title="Enterprise"
          description="Run Authgear for your mission-critical applications"
          features={['Managed SaaS or Private Cloud Deployment', 'Enterprise Grade SLA support', 'Professional Support and Services', 'Anomaly Detection', 'Audited Reports']}>
          <div slot="footer">
            <Button fluid large href="mailto:hello@authgear.com">
              Pricing: Contact Us
            </Button>
          </div>
        </PricingTableCard>
      </div>
    </div>
  </div>
</section>
