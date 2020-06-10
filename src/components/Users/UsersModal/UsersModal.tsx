import React, { FC, FormEvent } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
// TODO: убирай везде sass
import classes from './UsersModal.module.sass';
import { User } from '../../../entries/IUsers';

// TODO: пропсы везде называем по такому шаблону IUsersModalProps и это интерфейс
type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (form: User) => void;
  editUser?: User;
  children?: never;
};
const useStyles = makeStyles(() => createStyles({
  // TODO: стили страшно выглядят, там можно как то проще. Если не найдешь, то сделай обертку у каждого инпута
  root: {
    '& .MuiTextField-root': {
      marginBottom: 20,
    },
    '& .MuiFormGroup-root': {
      marginBottom: 20,
    },
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: 20,
    },
    '& #demo-simple-select-outlined-label': {
      padding: '2px 5px',
      backgroundColor: '#ffffff',
    },
  },
}));
export const UsersModal: FC<Props> = ({
  open, onClose, onSave, editUser,
}: Props) => {
  const styles = useStyles();
  // TODO:  Если приходит user на редактирование, дак его и подставь, зачем тебе в каждой строчке проверять
  const [form, setForm] = React.useState<User>({
    id: editUser ? editUser.id : undefined,
    lastName: editUser ? editUser.lastName : '',
    firstName: editUser ? editUser.firstName : '',
    secondName: editUser ? editUser.secondName : '',
    birthday: editUser ? editUser.birthday : moment().format('YYYY-MM-DD'),
    email: editUser ? editUser.email : '',
    gender: editUser ? editUser.gender : 'female',
    department: editUser ? editUser.department : '',
    position: editUser ? editUser.position : '',
    role: editUser ? editUser.role : undefined,
    phone: editUser ? editUser.phone : '',
  });
  const formChangeHandler = (name: string, value: string | unknown): void => {
    if (typeof value === 'string') {
      setForm({ ...form, [name]: value });
    }
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSave(form);
    onClose();
  };
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      aria-labelledby="users-modal"
      aria-describedby="simple-modal-description"
    >
      <div>
        <h2>Новый сотрудник</h2>
        <form
          id="users-form"
          className={styles.root}
          noValidate
          autoComplete="off"
          // TODO: не устал везде void писать ?) это не обязательно, у тебя вызываемая функция ничего не возрвщает. Ниже тоже самое
          onSubmit={(event): void => onSubmitHandler(event)}
        >
          <TextField
            className={classes.form__textInput}
            value={form.lastName}
            onChange={(event): void => formChangeHandler('lastName', event.target.value)}
            label="Фамилия"
            variant="outlined"
          />
          <TextField
            className={classes.form__textInput}
            value={form.firstName}
            onChange={(event): void => formChangeHandler('firstName', event.target.value)}
            label="Имя"
            variant="outlined"
          />
          <TextField
            className={classes.form__textInput}
            value={form.secondName}
            onChange={(event): void => formChangeHandler('secondName', event.target.value)}
            label="Отчество"
            variant="outlined"
          />
          <TextField
            className={classes.form__textInput}
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
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormLabel component="legend">Пол</FormLabel>
          <RadioGroup
            id="gender"
            row
            aria-label="gender"
            name="gender"
            value={form.gender}
            onChange={(event): void => formChangeHandler('gender', event.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Отдел</InputLabel>
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
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Должность</InputLabel>
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
          <div className={classes.form__buttons}>
            <Button variant="outlined">Отмена</Button>
            <Button variant="contained" color="primary" type="submit">
              Ок
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
