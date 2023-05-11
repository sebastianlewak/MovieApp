import styled, { css } from "styled-components";

export const Text = styled.span`
  ${(props) => {
    return {
      small: css`
        font-size: ${(props) => props.theme.fontsize.small};
      `,
      medium: css`
        font-size: ${(props) => props.theme.fontsize.medium};
        letter-spacing: -0.02em;
      `,
      large: css`
        font-size: ${(props) => props.theme.fontsize.large};
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 0.9;
      `,

      subtitle: css`
      font-size: ${(props) => props.theme.fontsize.subtitle};
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 0.9;
        
      `,
      title: css`
      font-size: ${(props) => props.theme.fontsize.title};
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 0.9;
        
      `
    }[props.variant];
  }}

  ${(props) => {
    return {
      default: css`
        color: ${(props) => props.theme.colorpalette["primary-light"]};
      `,

      "primary-dark": css`
        color: ${(props) => props.theme.colorpalette["primary-dark"]};
      `,

      "secondary-dark": css`
        color: ${(props) => props.theme.colorpalette["secondary-dark"]};
      `,
      "accent-dark": css`
        color: ${(props) => props.theme.colorpalette["accent-dark"]};
      `,
      "accent-light": css`
        color: ${(props) => props.theme.colorpalette["accent-light"]};
      `,
    }[props.color ?? "default"];
  }}
`;
