import AsyncStorage from '@react-native-async-storage/async-storage';
import SubjectType from '../types/SubjectType';

export const keys = {
  NEXT_ID: 'NEXT_ID',
  IDS: 'SUBJECT_IDS',
  ITEM: 'TRACKER_SUBJECT_{{id}}',
};

export const checkAllKeysPresent = (
  onCompleteCallback: (err: Error | null, result: boolean | null) => any,
) => {
  AsyncStorage.getAllKeys((error, all_keys) => {
    if (error) {
      onCompleteCallback(error, null);
    } else if (all_keys) {
      var all_keys_present =
        all_keys.includes(keys.IDS) && all_keys.includes(keys.NEXT_ID);
      onCompleteCallback(null, all_keys_present);
    } else {
      onCompleteCallback(null, false);
    }
  });
};

export const firstLoadInitialise = (
  onCompleteCallback: (err?: Error) => any,
) => {
  AsyncStorage.setItem(keys.NEXT_ID, '1', error => {
    if (error) {
      onCompleteCallback(error);
    } else {
      AsyncStorage.setItem(keys.IDS, JSON.stringify([]), error => {
        if (error) {
          onCompleteCallback(error);
        } else {
          onCompleteCallback();
        }
      });
    }
  });
};

export const loadNextID = (
  onCompleteCallback: (error: null | Error, nextId: number | null) => any,
) => {
  AsyncStorage.getItem(keys.NEXT_ID, (error, next_id) => {
    if (error) {
      onCompleteCallback(error, null);
      return;
    }
    if (next_id) {
      onCompleteCallback(null, Number(next_id));
    } else {
      onCompleteCallback(null, null);
    }
  });
};

export const loadSubjectIDs = (
  onCompleteCallback: (error: null | Error, ids: string[] | null) => any,
) => {
  AsyncStorage.getItem(keys.IDS, (error, ids) => {
    if (error) {
      onCompleteCallback(error, null);
      return;
    }
    if (ids) {
      onCompleteCallback(null, JSON.parse(ids));
    } else {
      onCompleteCallback(null, null);
    }
  });
};

export const loadSubjects = (
  ids: string[],
  onCompleteCallback: (
    error: null | Error,
    subjects: SubjectType[] | null,
  ) => any,
) => {
  AsyncStorage.multiGet(ids, (error, values) => {
    if (error) {
      onCompleteCallback(error[0], null);
      return;
    }
    if (values) {
      var subjects: SubjectType[] = [];
      console.log(values);
      values.forEach(value => subjects.push(JSON.parse(value[1] || '')));
      onCompleteCallback(null, subjects);
    } else {
      onCompleteCallback(null, null);
    }
  });
};

export const createSubject = (
  subject: SubjectType,
  subject_ids: string[],
  onCompleteCallback: (error: Error | null, subject: SubjectType | null) => any,
) => {
  console.log('params', subject, subject_ids);
  loadNextID((error, next_id) => {
    if (error || next_id === null) {
      onCompleteCallback(error, null);
    } else {
      subject.id = keys.ITEM.replace('{{id}}', next_id.toString());
      subject_ids.push(subject.id);
      console.log('id', next_id, subject.id);
      console.log('ids', subject_ids);
      AsyncStorage.setItem(subject.id, JSON.stringify(subject), _error => {
        if (_error) {
          onCompleteCallback(error, null);
        } else {
          AsyncStorage.setItem(
            keys.NEXT_ID,
            (++(next_id as number)).toString(),
            __error => {
              if (__error) {
                onCompleteCallback(__error, null);
              } else {
                AsyncStorage.setItem(
                  keys.IDS,
                  JSON.stringify(subject_ids),
                  ___error => {
                    if (___error) {
                      onCompleteCallback(___error, null);
                    } else {
                      onCompleteCallback(null, subject);
                    }
                  },
                );
              }
            },
          );
        }
      });
    }
  });
};

export const updateSubject = (
  subject: SubjectType,
  onCompleteCallback: (error: Error | null, subject: SubjectType | null) => any,
) => {
  AsyncStorage.setItem(subject.id, JSON.stringify(subject), _error => {
    if (_error) {
      onCompleteCallback(_error, null);
    } else {
      onCompleteCallback(null, subject);
    }
  });
};

export const loadAll = (
  onCompleteCallback: (
    error: null | Error,
    subjects: null | SubjectType[],
    subject_ids: null | string[],
  ) => any,
) => {
  // AsyncStorage.clear();
  checkAllKeysPresent((error, present) => {
    if (error) {
      onCompleteCallback(error, null, null);
    } else if (present) {
      loadSubjectIDs((__error, ids) => {
        if (__error || ids === null) {
          onCompleteCallback(__error, null, null);
        } else {
          loadSubjects(ids, (___error, subjects) => {
            if (___error || subjects === null) {
              onCompleteCallback(___error, null, null);
            } else {
              onCompleteCallback(null, subjects, ids);
            }
          });
        }
      });
    } else {
      firstLoadInitialise(_error => {
        if (_error) {
          onCompleteCallback(_error, null, null);
        } else {
          onCompleteCallback(null, [], []);
        }
      });
    }
  });
};
