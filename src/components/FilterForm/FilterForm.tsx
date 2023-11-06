import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';
import style from './FilterForm.module.scss';
import { buttonStyle } from '../../utils/buttonStyle';
import { CharacterParams } from '../../types/CharacterParams';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import * as filterAction from '../../features/filters';

export const FilterForm = () => {
  const { character } = useAppSelector(state => state.filters);
  const dispatch = useAppDispatch();
  const characterFilterParams: CharacterParams = {
    name: character?.name || '',
    status: character?.status || '',
    species: character?.species || '',
    type: character?.type || '',
    gender: character?.gender || '',
  };

  const commonFieldValidation = Yup.string()
    .matches(/^[A-Za-z0-9-]+$/, {
      message: 'Only digits, characters, and hyphens are allowed',
      excludeEmptyString: true,
    });

  const validationSchema = Yup.object().shape({
    name: commonFieldValidation,
    status: commonFieldValidation,
    species: commonFieldValidation,
    type: commonFieldValidation,
    gender: commonFieldValidation,
  });

  const formik = useFormik({
    initialValues: characterFilterParams,
    validationSchema,
    onSubmit: (values) => {
      const filterValues = Object.entries(values).reduce((acc: CharacterParams, [key, value]) => {
        if (value) {
          // eslint-disable-next-line no-param-reassign
          acc[key] = value;
        }

        return acc;
      }, {});

      dispatch(filterAction.set(filterValues));
    },
  });

  return (
    <div className={style.container}>

      <form
        onSubmit={formik.handleSubmit}
        className={style.container}
      >
        <div className={style.keywords_wrapper}>
          {
            Object.entries(formik.values).map(([key, value]):CharacterParams => (
              <TextField
                key={key}
                name={key}
                label={key}
                variant="filled"
                value={value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[key as keyof CharacterParams]
                  && Boolean(formik.errors[key as keyof CharacterParams])}
                helperText={formik.touched[key as keyof CharacterParams]
                  && formik.errors[key as keyof CharacterParams]}
                InputProps={{
                  style: {
                    background: '#F5F5F5',
                  },
                }}
              />
            ))
          }
        </div>

        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={() => {}}
          type="submit"
        >
          Find
        </Button>
      </form>
    </div>
  );
};
