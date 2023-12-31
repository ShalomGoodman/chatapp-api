import React from 'react';

import { Icon } from '@strapi/design-system';
import { ContentBox, useTracking } from '@strapi/helper-plugin';
import { ExternalLink, GlassesSquare } from '@strapi/icons';
import { useIntl } from 'react-intl';

const MissingPluginBanner = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();

  return (
    <a
      href="https://strapi.canny.io/plugin-requests"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ textDecoration: 'none' }}
      onClick={() => trackUsage('didMissMarketplacePlugin')}
    >
      <ContentBox
        title={formatMessage({
          id: 'admin.pages.MarketPlacePage.missingPlugin.title',
          defaultMessage: 'Documentation',
        })}
        subtitle={formatMessage({
          id: 'admin.pages.MarketPlacePage.missingPlugin.description',
          defaultMessage:
            "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!",
        })}
        icon={<GlassesSquare />}
        iconBackground="alternative100"
        endAction={
          <Icon as={ExternalLink} color="neutral600" width={3} height={3} marginLeft={2} />
        }
      />
    </a>
  );
};

export default MissingPluginBanner;
