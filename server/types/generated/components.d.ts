import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description_1: Schema.Attribute.RichText & Schema.Attribute.Required;
    description_2: Schema.Attribute.RichText;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    logo_image_1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo_image_2: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    contact_items: Schema.Attribute.Component<'elements.social-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    social_media: Schema.Attribute.Component<'elements.social-link', true>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Kirimkan pertanyaan atau pesan Anda melalui formulir diberikut ini'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Informasi Kontak'>;
  };
}

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlocksFeaturedPrograms extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_programs';
  info: {
    displayName: 'Featured Programs';
  };
  attributes: {
    programs: Schema.Attribute.Component<'elements.program-card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Program Unggulan'>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksLogoPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logo_philosophies';
  info: {
    displayName: 'Logo Philosophy';
  };
  attributes: {
    logo_description: Schema.Attribute.Text & Schema.Attribute.Required;
    logo_name: Schema.Attribute.String & Schema.Attribute.Required;
    main_logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    philosophy_items: Schema.Attribute.Component<
      'elements.philosophy-item',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Filosofi Logo'>;
  };
}

export interface BlocksQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_blocks';
  info: {
    displayName: 'Quote Block';
  };
  attributes: {
    quote: Schema.Attribute.Text;
  };
}

export interface BlocksVisionAndMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_vision_and_mission_sections';
  info: {
    displayName: 'Vision and Mission Section';
  };
  attributes: {
    eyebrow_title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mission_items: Schema.Attribute.Component<'elements.mission-item', true> &
      Schema.Attribute.Required;
    mission_title: Schema.Attribute.String & Schema.Attribute.Required;
    vision_description: Schema.Attribute.RichText & Schema.Attribute.Required;
    vision_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsMissionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_mission_items';
  info: {
    displayName: 'Mission Item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsPhilosophyItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_philosophy_items';
  info: {
    displayName: 'Philosophy Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_program_cards';
  info: {
    displayName: 'Program Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    social_link: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    bem_logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    brand_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Pemerintahan Mahasiswa'>;
    cabinet_logo: Schema.Attribute.Media<'images'>;
    contact_info_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Info Kontak'>;
    contact_items: Schema.Attribute.Component<'elements.social-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    copyright: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Copyright \u00A9 2025 BEM Universitas Sumatera Utara - All rights reserved.'>;
    navigation_links: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    quick_link_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tautan Cepat'>;
    social_links: Schema.Attribute.Component<'elements.social-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    university_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Universitas Sumatera Utara'>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    bem_logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    cabinet_logo: Schema.Attribute.Component<'elements.logo', false>;
    cta: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    navigation_links: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.contact-information': BlocksContactInformation;
      'blocks.content': BlocksContent;
      'blocks.featured-programs': BlocksFeaturedPrograms;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.logo-philosophy': BlocksLogoPhilosophy;
      'blocks.quote-block': BlocksQuoteBlock;
      'blocks.vision-and-mission-section': BlocksVisionAndMissionSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.mission-item': ElementsMissionItem;
      'elements.philosophy-item': ElementsPhilosophyItem;
      'elements.program-card': ElementsProgramCard;
      'elements.social-link': ElementsSocialLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
