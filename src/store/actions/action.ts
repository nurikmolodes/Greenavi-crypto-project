'use server';

import axios from 'axios';

export async function registrationAction(data: any) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/register',
      {
        ...data,
      },
    );

    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
}

export async function signInAction(data: any) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/login',
      { ...data },
    );

    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
}

export async function confirmationCodeAction(data: any) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/code',
      { ...data },
    );

    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
}

export async function exitAction(token: string) {
  try {
    const response = await axios.get(
      'https://app.greenavi.com/api/user/logout',
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function getRecoverPasswordTokenAction(data: any) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/recover',
      { ...data },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function recoverPasswordAction(data: any) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/recover-password',
      { ...data },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function getProfileAction(token: string) {
  try {
    const response = await axios.get(
      'https://app.greenavi.com/api/user/profile',
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function updateUserAction(data: any, token: string) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/update',
      { ...data },
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function getQrCodeAction(token: string) {
  try {
    const response = await axios.get(
      'https://app.greenavi.com/api/user/two-factor-new',
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function enable2faAction(data: any, token: string) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/two-factor',
      { ...data },
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function addTelegramAction(data: any, token: string) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/update',
      { ...data },
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function changePasswordAction(data: any, token: string) {
  try {
    const response = await axios.post(
      'https://app.greenavi.com/api/user/change-password',
      { ...data },
      {
        headers: { Authorization: token },
      },
    );

    return response.data;
  } catch (e: any) {
    console.log(e);
  }
}
