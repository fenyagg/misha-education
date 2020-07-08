import React, { FC, FormEvent, useMemo } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { IUser } from '../../../entries/IUsers';
import { useStore } from '../../../helpers/use-store';

interface IUsersModalProps {
  children?: never;
}
export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > [tabindex = "-1"]': {
      backgroundColor: '#fff',
      outline: 'none',
      borderRadius: 5,
      padding: 20,
      minWidth: 320,
      maxWidth: 600,
      width: 600,
    },
  },
  formControls: {
    width: '100%',
    marginBottom: 20,
  },
  formControlsDate: {
    width: '50%',
    marginBottom: 20,
  },
  selectLabel: {
    padding: '2px 5px',
    backgroundColor: '#ffffff',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > button+button': {
      marginLeft: 20,
    },
  },
});
export const UsersModal: FC<IUsersModalProps> = () => {
  const styles = useStyles();
  const store = useStore();
  const users = store.userStore.users;
  const editUserId = store.usersModal.editUserId;
  const editUser = useMemo(() => users.find((user) => user.id === editUserId), [editUserId, users]);
  const [form, setForm] = React.useState<IUser>(
    editUser || {
      id: undefined,
      lastName: '',
      firstName: '',
      secondName: '',
      birthday: moment().format('YYYY-MM-DD'),
      email: '',
      gender: 'female',
      department: '',
      position: '',
      role: undefined,
      phone: '',
    },
  );
  const formChangeHandler = (name: string, value: string | unknown): void => {
    if (typeof value === 'string') {
      setForm({ ...form, [name]: value });
    }
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (form.id) {
      store.userStore.editUser(form);
    } else {
      store.userStore.addUser({ ...form, id: uuidv4() });
    }
    store.usersModal.close();
  };
  return (
    <Modal
      className={styles.modal}
      open={store.usersModal.isOpen}
      onClose={store.usersModal.close}
      aria-labelledby="users-modal"
      aria-describedby="simple-modal-description"
    >
      <div>
        <h2>Новый сотрудник</h2>
        <form id="users-form" noValidate autoComplete="off" onSubmit={(event): void => onSubmitHandler(event)}>
          <TextField
            className={styles.formControls}
            value={form.lastName}
            onChange={(event): void => formChangeHandler('lastName', event.target.value)}
            label="Фамилия"
            variant="outlined"
          />
          <TextField
            className={styles.formControls}
            value={form.firstName}
            onChange={(event): void => formChangeHandler('firstName', event.target.value)}
            label="Имя"
            variant="outlined"
          />
          <TextField
            className={styles.formControls}
            value={form.secondName}
            onChange={(event): void => formChangeHandler('secondName', event.target.value)}
            label="Отчество"
            variant="outlined"
          />
          <TextField
            className={styles.formControls}
            value={form.email}
            onChange={(event): void => formChangeHandler('email', event.target.value)}
            label="Email"
            variant="outlined"
          />
          <TextField
            label="День рождения"
            type="date"
            value={form.birthday}
            onChange={(event): void => formChangeHandler('birthday', event.target.value)}
            className={styles.formControlsDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormLabel component="legend">Пол</FormLabel>
          <RadioGroup
            id="gender"
            className={styles.formControls}
            row
            aria-label="gender"
            name="gender"
            value={form.gender}
            onChange={(event): void => formChangeHandler('gender', event.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormControl className={styles.formControls} variant="outlined">
            <InputLabel className={styles.selectLabel} htmlFor="outlined-age-native-simple">
              Отдел
            </InputLabel>
            <Select
              native
              value={form.department}
              onChange={(event): void => formChangeHandler('department', event.target.value)}
              inputProps={{
                name: 'department',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value="develop">develop</option>
            </Select>
          </FormControl>
          <FormControl className={styles.formControls} variant="outlined">
            <InputLabel className={styles.selectLabel} htmlFor="outlined-age-native-simple">
              Должность
            </InputLabel>
            <Select
              native
              value={form.role}
              onChange={(event): void => formChangeHandler('role', event.target.value)}
              inputProps={{
                name: 'role',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value="IOS Developer">IOS Developer</option>
            </Select>
          </FormControl>
          <div className={styles.buttons}>
            <Button variant="outlined" onClick={store.usersModal.close}>
              Отмена
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Ок
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
