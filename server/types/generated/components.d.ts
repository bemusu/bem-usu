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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.featured-programs': BlocksFeaturedPrograms;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.logo-philosophy': BlocksLogoPhilosophy;
      'blocks.vision-and-mission-section': BlocksVisionAndMissionSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.mission-item': ElementsMissionItem;
      'elements.philosophy-item': ElementsPhilosophyItem;
      'elements.program-card': ElementsProgramCard;
    }
  }
}
