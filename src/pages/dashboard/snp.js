import { Container, Typography, Grid, Card, CardHeader, Button, Stack, CircularProgress } from '@mui/material';
// layouts
import Layout from '../../layouts';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
//zustand
import create from 'zustand';
import { reject, set } from 'lodash';
import { useCallback, useState } from 'react';
import readXlsxFile from 'read-excel-file';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import CollapsibleTable, { TotalTable } from '../../components/table';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

PageOne.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

const useStoreSnp = create(() => ({
  count: 0,
  snptwentyL: 0,
  snptwentyM: 0,
  snptwentyS: 0,
  snptenL: 0,
  snptenM: 0,
  snptenS: 0,
  snptenSS: 0,
  snpfiveL: 0,
  snpfiveM: 0,
  snpfiveS: 0,
  snpfiveSS: 0,
  snpthreeL: 0,
  snpthreeM: 0,
  snpthreeS: 0,

  증가() {
    set((state) => ({ count: state.count + 1 }));
  },

  async ajax요청() {
    const response = await fetch('https://codingapple1.github.io/data.json');
    console.log(await response.json());
  },
}));
const filese = [];
const user = [];

export default function PageOne() {
  const { themeStretch } = useSettings();
  const {
    count,
    ajax요청,
    snptwentyL,
    snptwentyM,
    snptwentyS,
    snptenL,
    snptenM,
    snptenS,
    snpfiveL,
    snpfiveM,
    snpfiveS,
    snpthreeL,
    snpthreeM,
    snpthreeS,
    snpfiveSS,
    snptenSS,
  } = useStoreSnp();

  //파일명 !

  const [deliveryList, setDeliveryList] = useState({});

  const [itemList, setItemList] = useState({
    coupang: [],
    naver: [],
    gmarket: [],
    wemakeprice: [],
    tiket: [],
    st: [],
    interpark: [],
    lotte: [],
  });

  //파일수정 !
  const readExcel = (file, name) => {
    console.log(file);
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      console.log('어레이자료!!');
      console.log(d);
      switch (name) {
        case 'coupang':
          console.log('쿠팡접속완료 ! ');
          setItemList({
            ...itemList,
            coupang: d,
          });
          d.map((user, i) => {
            if (d[i].옵션ID == '75962046427') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(특) 3kg'
                )
              );
            } else if (d[i].옵션ID == '75962046334') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(특) 5kg'
                )
              );
            } else if (d[i].옵션ID == '80931650520') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(특) 10kg'
                )
              );
            } else if (d[i].옵션ID == '75938820691') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(대) 3kg'
                )
              );
            } else if (d[i].옵션ID == '75938820679') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(대) 5kg'
                )
              );
            } else if (d[i].옵션ID == '80931650516') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(대) 10kg'
                )
              );
            } else if (d[i].옵션ID == '75962239350') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(중) 3kg'
                )
              );
            } else if (d[i].옵션ID == '75962239207') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(중) 5kg'
                )
              );
            } else if (d[i].옵션ID == '80931650513') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(중) 10kg'
                )
              );
            } else if (d[i].옵션ID == '80818673834') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '중',
                  d[i].배송메세지,
                  '*합천 햇양파(특) 20kg'
                )
              );
            } else if (d[i].옵션ID == '80818673849') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '중',
                  d[i].배송메세지,
                  '*합천 햇양파(대) 20kg'
                )
              );
            } else if (d[i].옵션ID == '80818673862') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '중',
                  d[i].배송메세지,
                  '*합천 햇양파(중) 20kg'
                )
              );
            } else if (d[i].옵션ID == '78867287341') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(장아찌) 10kg'
                )
              );
            } else if (d[i].옵션ID == '78867287327') {
              return filese.push(
                new Delivery(
                  d[i].수취인이름,
                  d[i].구매자전화번호,
                  d[i]['수취인 주소'],
                  d[i]['구매수(수량)'],
                  '소',
                  d[i].배송메세지,
                  '합천 햇양파(장아찌) 5kg'
                )
              );
            }
          });
          console.log(filese);

          break;
        case 'naver':
          console.log('naver접속완료! ! ');
          setItemList({
            ...itemList,
            naver: d,
          });
          d.map((user, i) => {
            if (d[i].옵션정보 == '크기: 양파(특) / 중량: 3kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(특) / 중량: 3kg'
                )
              );
            } else if (d[i].옵션정보 == '크기: 양파(대) / 중량: 3kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(대) / 중량: 3kg'
                )
              );
            } else if (d[i].옵션정보 == '크기: 양파(중) / 중량: 3kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(중) / 중량: 3kg'
                )
              );
            } else if (d[i].옵션정보 == '무게: 5kg / 사이즈: 특' || d[i].옵션정보 == '크기: 양파(특) / 중량: 5kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(특) / 중량: 5kg'
                )
              );
            } else if (d[i].옵션정보 == '무게: 5kg / 사이즈: 대' || d[i].옵션정보 == '크기: 양파(대) / 중량: 5kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(대) / 중량: 5kg'
                )
              );
            } else if (d[i].옵션정보 == '무게: 5kg / 사이즈: 중' || d[i].옵션정보 == '크기: 양파(중) / 중량: 5kg') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(중) / 중량: 5kg'
                )
              );
            } else if (d[i].옵션정보 == '크기: 양파(특) / 중량: 10kg' || d[i].옵션정보 == '무게: 10kg / 사이즈: 특') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(특) / 중량: 10kg'
                )
              );
            } else if (d[i].옵션정보 == '크기: 양파(대) / 중량: 10kg' || d[i].옵션정보 == '무게: 10kg / 사이즈: 대') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(대) / 중량: 10kg'
                )
              );
            } else if (d[i].옵션정보 == '크기: 양파(중) / 중량: 10kg' || d[i].옵션정보 == '무게: 10kg / 사이즈: 중') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처1,
                  d[i].배송지,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '양파(중) / 중량: 10kg'
                )
              );
            }
          });
          break;
        case 'gmarket':
          console.log('gmarket접속완료! ! ');
          setItemList({
            ...itemList,
            gmarket: d,
          });
          d.map((user, i) => {
            if (d[i].상품번호 == 'C392317388' || d[i].상품번호 == '2183841490') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(특) 3kg'
                )
              );
            } else if (d[i].상품번호 == 'C392297622' || d[i].상품번호 == '2183843227') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(대) 3kg'
                )
              );
            } else if (d[i].상품번호 == 'C392319035' || d[i].상품번호 == '2183840549') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(중) 3kg'
                )
              );
            } else if (d[i].상품번호 == 'C392320442' || d[i].상품번호 == '2183839586') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(특) 5kg'
                )
              );
            } else if (d[i].상품번호 == 'C392321895' || d[i].상품번호 == '2183838274') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(대) 5kg'
                )
              );
            } else if (d[i].상품번호 == 'C392323608' || d[i].상품번호 == '2183837318') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(중) 5kg'
                )
              );
            } else if (d[i].상품번호 == 'C392324243' || d[i].상품번호 == '2183835995') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(특) 10kg'
                )
              );
            } else if (d[i].상품번호 == 'C392324814' || d[i].상품번호 == '2183834728') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(대) 10kg'
                )
              );
            } else if (d[i].상품번호 == 'C392326527' || d[i].상품번호 == '2183833285') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(중) 10kg'
                )
              );
            } else if (d[i].상품번호 == 'C497410406' || d[i].상품번호 == '2326679260') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(특) 20kg'
                )
              );
            } else if (d[i].상품번호 == 'C497411822' || d[i].상품번호 == '2326680206') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(대) 20kg'
                )
              );
            } else if (d[i].상품번호 == 'C497412243' || d[i].상품번호 == '2326680444') {
              return filese.push(
                new Delivery(
                  d[i].수령인명,
                  d[i]['수령인 휴대폰'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i]['배송시 요구사항'],
                  '합천 햇양파(중) 20kg'
                )
              );
            }
          });
          break;
        case 'wemakeprice':
          console.log('wemakeprice접속완료! ! ');
          setItemList({
            ...itemList,
            wemakeprice: d,
          });
          d.map((user, i) => {
            if (d[i].옵션 == '햇 양파(특) | 3kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(특) | 3kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(대) | 3kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(대) | 3kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(중) | 3kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(중) | 3kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(특) | 5kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(특) | 5kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(대) | 5kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(대) | 5kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(중) | 5kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(중) | 5kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(특) | 10kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(특) | 10kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(대) | 10kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(대) | 10kg'
                )
              );
            } else if (d[i].옵션 == '햇 양파(중) | 10kg') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '소',
                  d[i].배송메세지,
                  '햇 양파(중) | 10kg'
                )
              );
            } else if (d[i].옵션 == '특') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i].배송메세지,
                  '무료배송 국내산 신선 햇 양파(특) | 20kg'
                )
              );
            } else if (d[i].옵션 == '대') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i].배송메세지,
                  '무료배송 국내산 신선 햇 양파(대) | 20kg'
                )
              );
            } else if (d[i].옵션 == '중') {
              return filese.push(
                new Delivery(
                  d[i].받는사람,
                  d[i]['받는사람 연락처'],
                  d[i].주소,
                  d[i].수량,
                  '중',
                  d[i].배송메세지,
                  '무료배송 국내산 신선 햇 양파(중) | 20kg'
                )
              );
            }
          });

          break;
        case 'tiket':
          console.log('tiket접속완료! ! ');
          setItemList({
            ...itemList,
            tiket: d,
          });

          d.map((user, i) => {
            if (d[i].옵션번호 == '8604403334') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(특) | 3kg'
                )
              );
            } else if (d[i].옵션번호 == '8604432946') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(대) | 3kg'
                )
              );
            } else if (d[i].옵션번호 == '8604048910') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(중) | 3kg'
                )
              );
            } else if (d[i].옵션번호 == '8604403338') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(특) | 5kg'
                )
              );
            } else if (d[i].옵션번호 == '8604432950') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(대) | 5kg'
                )
              );
            } else if (d[i].옵션번호 == '8604048914') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(중) | 5kg'
                )
              );
            } else if (d[i].옵션번호 == '10306824150') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(특) | 10kg'
                )
              );
            } else if (d[i].옵션번호 == '10306832878') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(대) | 10kg'
                )
              );
            } else if (d[i].옵션번호 == '10306832882') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '소',
                  d[i].배송요청메모,
                  '햇 양파(중) | 10kg'
                )
              );
            } else if (d[i].옵션번호 == '10307127082') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '중',
                  d[i].배송요청메모,
                  '햇 양파(특) | 20kg'
                )
              );
            } else if (d[i].옵션번호 == '10307127066') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '중',
                  d[i].배송요청메모,
                  '햇 양파(대) | 20kg'
                )
              );
            } else if (d[i].옵션번호 == '10307127074') {
              return filese.push(
                new Delivery(
                  d[i].수취인명,
                  d[i].수취인연락처,
                  d[i].수취인주소,
                  Number(d[i].구매수량),
                  '중',
                  d[i].배송요청메모,
                  '햇 양파(중) | 20kg'
                )
              );
            }
          });
          console.log('자료!!');
          console.log(filese);

          break;
        case 'st':
          console.log('st접속완료! ! ');
          setItemList({
            ...itemList,
            st: d,
          });
          break;

        case 'interpark':
          console.log('interpark접속완료! ! ');
          setItemList({
            ...itemList,
            interpark: d,
          });
          break;
        case 'lotte':
          console.log('lotte접속완료! ! ');
          setItemList({
            ...itemList,
            lotte: d,
          });
          break;
      }

      // 이프문 삭제 !
      // if (name === 'coupang') {
      //   console.log('쿠팡접속완료 ! ');
      //   setItemList({
      //     ...itemList,
      //     coupang: d,
      //   });
      // } else if (name === 'naver') {
      //   console.log('네이버 접속 완료  ! ');
      //   setItemList({
      //     ...itemList,
      //     naver: d,
      //   });
      // }
    });
  };

  // new Delivery(순서대로 , 하면, 된, 다 )

  function Delivery(username, phone, address, quantity, boxsize, message, name) {
    this.예약구분 = '';
    this.집하예정일 = '';
    this.받는분성명 = username;
    this.받는분전화번호 = phone;
    this.받는분기타연락처 = '';
    this.받는분우편번호 = '';
    this.받는분주소 = address;
    this.운송장번호 = '';
    this.고객주문번호 = '';
    this.품목명 = '식품(농산물)';
    this.박스수량 = quantity;
    this.박스타입 = boxsize;
    this.기본운임 = '';
    this.배송메세지1 = message;
    this.배송메세지2 = '';
    this.품목명 = name;
  }

  //수정코드
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    readExcel(file, name);
  };

  // 기존코드 !
  // const onChangeFile = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   // readExcel(file);
  // };

  //기본출력 !

  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현재 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  const originalExcelDownload = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(filese);

    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');

    XLSX.writeFile(wb, `수취인형식(통합형)${time.year}${time.month}${time.date}${time.hours}.xlsx`);
  };

  // 새로고침 버튼 추가 !!

  const onClickOperMarket = () => {
    //쿠팡 3키로 특
    const coupangThreeL = itemList.coupang.filter((item) => item.옵션ID == '75962046427');
    const coupangThreeLSum = coupangThreeL.reduce((prev, cur, i) => prev + coupangThreeL[i]['구매수(수량)'], 0);

    //쿠팡 5키로 특
    const coupangfiveL = itemList.coupang.filter((item) => item.옵션ID == '75962046334');
    const coupangfiveLSum = coupangfiveL.reduce((prev, cur, i) => prev + coupangfiveL[i]['구매수(수량)'], 0);

    //쿠팡 10키로 특
    const coupangtenL = itemList.coupang.filter((item) => item.옵션ID == '80931650520');
    const coupangtenLSum = coupangtenL.reduce((prev, cur, i) => prev + coupangtenL[i]['구매수(수량)'], 0);

    //쿠팡 3키로 대
    const coupangThreeM = itemList.coupang.filter((item) => item.옵션ID == '75938820691');
    const coupangThreeMSum = coupangThreeM.reduce((prev, cur, i) => prev + coupangThreeM[i]['구매수(수량)'], 0);

    //쿠팡 5키로 대
    const coupangfiveM = itemList.coupang.filter((item) => item.옵션ID == '75938820679');
    const coupangfiveMSum = coupangfiveM.reduce((prev, cur, i) => prev + coupangfiveM[i]['구매수(수량)'], 0);

    //쿠팡 10키로 대
    const coupangtenM = itemList.coupang.filter((item) => item.옵션ID == '80931650516');
    const coupangTtenMSum = coupangtenM.reduce((prev, cur, i) => prev + coupangtenM[i]['구매수(수량)'], 0);

    //쿠팡 3키로 중
    const coupangthreeS = itemList.coupang.filter((item) => item.옵션ID == '75962239350');
    const coupangthreeSSum = coupangthreeS.reduce((prev, cur, i) => prev + coupangthreeS[i]['구매수(수량)'], 0);

    //쿠팡 5키로 중
    const coupangfiveS = itemList.coupang.filter((item) => item.옵션ID == '75962239207');
    const coupangfiveSSum = coupangfiveS.reduce((prev, cur, i) => prev + coupangfiveS[i]['구매수(수량)'], 0);

    //쿠팡 10키로 중
    const coupangtenS = itemList.coupang.filter((item) => item.옵션ID == '80931650513');
    const coupangtenSSum = coupangtenS.reduce((prev, cur, i) => prev + coupangtenS[i]['구매수(수량)'], 0);

    //쿠팡 20키로 특
    const coupangtwentyL = itemList.coupang.filter((item) => item.옵션ID == '80818673834');
    const coupangtwentyLSum = coupangtwentyL.reduce((prev, cur, i) => prev + coupangtwentyL[i]['구매수(수량)'], 0);

    //쿠팡 20키로 대
    const coupangtwentyM = itemList.coupang.filter((item) => item.옵션ID == '80818673849');
    const coupangtwentyMSum = coupangtwentyM.reduce((prev, cur, i) => prev + coupangtwentyM[i]['구매수(수량)'], 0);

    //쿠팡 20키로 중
    const coupangtwentyS = itemList.coupang.filter((item) => item.옵션ID == '80818673862');
    const coupangtwentySSum = coupangtwentyS.reduce((prev, cur, i) => prev + coupangtwentyS[i]['구매수(수량)'], 0);

    //쿠팡 5키로 소
    const coupangfiveSS = itemList.coupang.filter((item) => item.옵션ID == '78867287327');
    const coupangfiveSSSum = coupangfiveSS.reduce((prev, cur, i) => prev + coupangfiveSS[i]['구매수(수량)'], 0);

    //쿠팡 10키로 소
    const coupangtenSS = itemList.coupang.filter((item) => item.옵션ID == '78867287341');
    const coupangtenSSSum = coupangtenSS.reduce((prev, cur, i) => prev + coupangtenSS[i]['구매수(수량)'], 0);

    //네이버!!
    //네이버 3키로 특
    const naverThreeL = itemList.naver.filter((item) => item.옵션정보 == '크기: 양파(특) / 중량: 3kg');
    const naverThreeLSum = naverThreeL.reduce((prev, cur, i) => prev + naverThreeL[i]['구매수(수량)'], 0);

    //네이버 5키로 특
    const naverfiveL = itemList.naver.filter(
      (item) => item.옵션정보 == '무게: 5kg / 사이즈: 특' || item.옵션정보 == '크기: 양파(특) / 중량: 5kg'
    );
    const naverfiveLSum = naverfiveL.reduce((prev, cur, i) => prev + naverfiveL[i]['구매수(수량)'], 0);

    //네이버 10키로 특
    const navertenL = itemList.naver.filter(
      (item) => item.옵션정보 == '크기: 양파(특) / 중량: 10kg' || item.옵션정보 == '무게: 10kg / 사이즈: 특'
    );
    const navertenLSum = navertenL.reduce((prev, cur, i) => prev + navertenL[i]['구매수(수량)'], 0);

    //네이버 3키로 대
    const naverThreeM = itemList.naver.filter((item) => item.옵션정보 == '크기: 양파(중) / 중량: 3kg');
    const naverThreeMSum = naverThreeM.reduce((prev, cur, i) => prev + naverThreeM[i]['구매수(수량)'], 0);

    //네이버 5키로 대
    const naverfiveM = itemList.naver.filter(
      (item) => item.옵션정보 == '무게: 5kg / 사이즈: 대' || item.옵션정보 == '크기: 양파(대) / 중량: 5kg'
    );
    const naverfiveMSum = naverfiveM.reduce((prev, cur, i) => prev + naverfiveM[i]['구매수(수량)'], 0);

    //네이버 10키로 대
    const navertenM = itemList.naver.filter(
      (item) => item.옵션정보 == '크기: 양파(대) / 중량: 10kg' || item.옵션정보 == '무게: 10kg / 사이즈: 대'
    );
    const naverTtenMSum = navertenM.reduce((prev, cur, i) => prev + navertenM[i]['구매수(수량)'], 0);

    //네이버 3키로 중
    const naverthreeS = itemList.naver.filter((item) => item.옵션정보 == '크기: 양파(중) / 중량: 3kg');
    const naverthreeSSum = naverthreeS.reduce((prev, cur, i) => prev + naverthreeS[i]['구매수(수량)'], 0);

    //네이버 5키로 중
    const naverfiveS = itemList.naver.filter(
      (item) => item.옵션정보 == '무게: 5kg / 사이즈: 중' || item.옵션정보 == '크기: 양파(중) / 중량: 5kg'
    );
    const naverfiveSSum = naverfiveS.reduce((prev, cur, i) => prev + naverfiveS[i]['구매수(수량)'], 0);

    //네이버 10키로 중
    const navertenS = itemList.naver.filter(
      (item) => item.옵션정보 == '크기: 양파(중) / 중량: 10kg' || item.옵션정보 == '무게: 10kg / 사이즈: 중'
    );
    const navertenSSum = navertenS.reduce((prev, cur, i) => prev + navertenS[i]['구매수(수량)'], 0);

    //지마켓
    //gmarket 3키로 특
    const gmarketThreeL = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392317388' || item.상품번호 == '2183841490'
    );
    const gmarketThreeLSum = gmarketThreeL.reduce((prev, cur, i) => prev + gmarketThreeL[i].수량, 0);

    //gmarket 5키로 특
    const gmarketfiveL = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392320442' || item.상품번호 == '2183839586'
    );
    const gmarketfiveLSum = gmarketfiveL.reduce((prev, cur, i) => prev + gmarketfiveL[i].수량, 0);

    //gmarket 10키로 특
    const gmarkettenL = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392324243' || item.상품번호 == '2183835995'
    );
    const gmarkettenLSum = gmarkettenL.reduce((prev, cur, i) => prev + gmarkettenL[i].수량, 0);

    //gmarket 3키로 대
    const gmarketThreeM = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392297622' || item.상품번호 == '2183843227'
    );
    const gmarketThreeMSum = gmarketThreeM.reduce((prev, cur, i) => prev + gmarketThreeM[i].수량, 0);

    //gmarket 5키로 대
    const gmarketfiveM = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392321895' || item.상품번호 == '2183838274'
    );
    const gmarketfiveMSum = gmarketfiveM.reduce((prev, cur, i) => prev + gmarketfiveM[i].수량, 0);

    //gmarket 10키로 대
    const gmarkettenM = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392324814' || item.상품번호 == '2183834728'
    );
    const gmarketTtenMSum = gmarkettenM.reduce((prev, cur, i) => prev + gmarkettenM[i].수량, 0);

    //gmarket 3키로 중
    const gmarketthreeS = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392319035' || item.상품번호 == '2183840549'
    );
    const gmarketthreeSSum = gmarketthreeS.reduce((prev, cur, i) => prev + gmarketthreeS[i].수량, 0);

    //gmarket 5키로 중
    const gmarketfiveS = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392323608' || item.상품번호 == '2183837318'
    );
    const gmarketfiveSSum = gmarketfiveS.reduce((prev, cur, i) => prev + gmarketfiveS[i].수량, 0);

    //gmarket 10키로 중
    const gmarkettenS = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C392326527' || item.상품번호 == '2183833285'
    );
    const gmarkettenSSum = gmarkettenS.reduce((prev, cur, i) => prev + gmarkettenS[i].수량, 0);

    //gmarket 20키로 특
    const gmarkettwentyL = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C497410406' || item.상품번호 == '2326679260'
    );
    const gmarkettwentyLSum = gmarkettwentyL.reduce((prev, cur, i) => prev + gmarkettwentyL[i].수량, 0);

    //gmarket 20키로 대
    const gmarkettwentyM = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C497411822' || item.상품번호 == '2326680206'
    );
    const gmarkettwentyMSum = gmarkettwentyM.reduce((prev, cur, i) => prev + gmarkettwentyM[i].수량, 0);

    //gmarket 20키로 중
    const gmarkettwentyS = itemList.gmarket.filter(
      (item) => item.상품번호 == 'C497412243' || item.상품번호 == '2326680444'
    );
    const gmarkettwentySSum = gmarkettwentyS.reduce((prev, cur, i) => prev + gmarkettwentyS[i].수량, 0);

    //위메프 !!
    //위메프 3키로 특
    const wemakepriceThreeL = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(특) | 3kg');
    const wemakepriceThreeLSum = wemakepriceThreeL.reduce((prev, cur, i) => prev + wemakepriceThreeL[i].수량, 0);

    //위메프 5키로 특
    const wemakepricefiveL = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(특) | 5kg');
    const wemakepricefiveLSum = wemakepricefiveL.reduce((prev, cur, i) => prev + wemakepricefiveL[i].수량, 0);

    //위메프 10키로 특
    const wemakepricetenL = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(특) | 10kg');
    const wemakepricetenLSum = wemakepricetenL.reduce((prev, cur, i) => prev + wemakepricetenL[i].수량, 0);

    //위메프 3키로 대
    const wemakepriceThreeM = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(대) | 3kg');
    const wemakepriceThreeMSum = wemakepriceThreeM.reduce((prev, cur, i) => prev + wemakepriceThreeM[i].수량, 0);

    //위메프 5키로 대
    const wemakepricefiveM = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(대) | 5kg');
    const wemakepricefiveMSum = wemakepricefiveM.reduce((prev, cur, i) => prev + wemakepricefiveM[i].수량, 0);

    //위메프 10키로 대
    const wemakepricetenM = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(대) | 10kg');
    const wemakepriceTtenMSum = wemakepricetenM.reduce((prev, cur, i) => prev + wemakepricetenM[i].수량, 0);

    //위메프 3키로 중
    const wemakepricethreeS = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(중) | 3kg');
    const wemakepricethreeSSum = wemakepricethreeS.reduce((prev, cur, i) => prev + wemakepricethreeS[i].수량, 0);

    //위메프 5키로 중
    const wemakepricefiveS = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(중) | 5kg');
    const wemakepricefiveSSum = wemakepricefiveS.reduce((prev, cur, i) => prev + wemakepricefiveS[i].수량, 0);

    //위메프 10키로 중
    const wemakepricetenS = itemList.wemakeprice.filter((item) => item.옵션 == '햇 양파(중) | 10kg');
    const wemakepricetenSSum = wemakepricetenS.reduce((prev, cur, i) => prev + wemakepricetenS[i].수량, 0);

    //위메프 20키로 특
    const wemakepricetwentyL = itemList.wemakeprice.filter((item) => item.옵션 == '특');
    const wemakepricetwentyLSum = wemakepricetwentyL.reduce((prev, cur, i) => prev + wemakepricetwentyL[i].수량, 0);

    //위메프 20키로 대
    const wemakepricetwentyM = itemList.wemakeprice.filter((item) => item.옵션 == '대');
    const wemakepricetwentyMSum = wemakepricetwentyM.reduce((prev, cur, i) => prev + wemakepricetwentyM[i].수량, 0);

    //위메프 20키로 중
    const wemakepricetwentyS = itemList.wemakeprice.filter((item) => item.옵션 == '중');
    const wemakepricetwentySSum = wemakepricetwentyS.reduce((prev, cur, i) => prev + wemakepricetwentyS[i].수량, 0);

    /// 티몬!!

    //티몬 3키로 특
    const tiketThreeL = itemList.tiket.filter((item) => item.옵션번호 == '8604403334');
    const tiketThreeLSum = tiketThreeL.reduce((prev, cur, i) => prev + Number(tiketThreeL[i].구매수량), 0);

    //티몬 5키로 특
    const tiketfiveL = itemList.tiket.filter((item) => item.옵션번호 == '8604403338');
    const tiketfiveLSum = tiketfiveL.reduce((prev, cur, i) => prev + Number(tiketfiveL[i].구매수량), 0);

    //티몬 10키로 특
    const tikettenL = itemList.tiket.filter((item) => item.옵션번호 == '10306824150');
    const tikettenLSum = tikettenL.reduce((prev, cur, i) => prev + Number(tikettenL[i].구매수량), 0);

    //티몬 3키로 대
    const tiketThreeM = itemList.tiket.filter((item) => item.옵션번호 == '8604432946');
    const tiketThreeMSum = tiketThreeM.reduce((prev, cur, i) => prev + Number(tiketThreeM[i].구매수량), 0);

    //티몬 5키로 대
    const tiketfiveM = itemList.tiket.filter((item) => item.옵션번호 == '8604432950');
    const tiketfiveMSum = tiketfiveM.reduce((prev, cur, i) => prev + Number(tiketfiveM[i].구매수량), 0);

    //티몬 10키로 대
    const tikettenM = itemList.tiket.filter((item) => item.옵션번호 == '10306832878');
    const tiketTtenMSum = tikettenM.reduce((prev, cur, i) => prev + Number(tikettenM[i].구매수량), 0);

    //티몬 3키로 중
    const tiketthreeS = itemList.tiket.filter((item) => item.옵션번호 == '8604048910');
    const tiketthreeSSum = tiketthreeS.reduce((prev, cur, i) => prev + Number(tiketthreeS[i].구매수량), 0);

    //티몬 5키로 중
    const tiketfiveS = itemList.tiket.filter((item) => item.옵션번호 == '8604048914');
    const tiketfiveSSum = tiketfiveS.reduce((prev, cur, i) => prev + Number(tiketfiveS[i].구매수량), 0);

    //티몬 10키로 중
    const tikettenS = itemList.tiket.filter((item) => item.옵션번호 == '10306832882');
    const tikettenSSum = tikettenS.reduce((prev, cur, i) => prev + Number(tikettenS[i].구매수량), 0);

    //티몬 20키로 특
    const tikettwentyL = itemList.tiket.filter((item) => item.옵션번호 == '10307127082');
    const tikettwentyLSum = tikettwentyL.reduce((prev, cur, i) => prev + Number(tikettwentyL[i].구매수량), 0);

    //티몬 20키로 대
    const tikettwentyM = itemList.tiket.filter((item) => item.옵션번호 == '10307127066');
    const tikettwentyMSum = tikettwentyM.reduce((prev, cur, i) => prev + Number(tikettwentyM[i].구매수량), 0);

    //티몬 20키로 중
    const tikettwentyS = itemList.tiket.filter((item) => item.옵션번호 == '10307127074');
    const tikettwentySSum = tikettwentyS.reduce((prev, cur, i) => prev + Number(tikettwentyS[i].구매수량), 0);

    /// 11번가 !! st
    /// 인터파크 !!
    /// 롯데온!!

    useStoreSnp.setState({
      snpthreeL: coupangThreeLSum + naverThreeLSum + gmarketThreeLSum + wemakepriceThreeLSum + tiketThreeLSum,
    });
    useStoreSnp.setState({
      snpfiveL: coupangfiveLSum + naverfiveLSum + gmarketfiveLSum + wemakepricefiveLSum + tiketfiveLSum,
    });
    useStoreSnp.setState({
      snptenL: coupangtenLSum + navertenLSum + gmarkettenLSum + wemakepricetenLSum + tikettenLSum,
    });

    useStoreSnp.setState({
      snpthreeM: coupangThreeMSum + naverThreeMSum + gmarketThreeMSum + wemakepriceThreeMSum + tiketThreeMSum,
    });
    useStoreSnp.setState({
      snpfiveM: coupangfiveMSum + naverfiveMSum + gmarketfiveMSum + wemakepricefiveMSum + tiketfiveMSum,
    });
    useStoreSnp.setState({
      snptenM: coupangTtenMSum + naverTtenMSum + gmarketTtenMSum + wemakepriceTtenMSum + tiketTtenMSum,
    });

    useStoreSnp.setState({
      snpthreeS: coupangthreeSSum + naverthreeSSum + gmarketthreeSSum + wemakepricethreeSSum + tiketthreeSSum,
    });
    useStoreSnp.setState({
      snpfiveS: coupangfiveSSum + naverfiveSSum + gmarketfiveSSum + wemakepricefiveSSum + tiketfiveSSum,
    });
    useStoreSnp.setState({
      snptenS: coupangtenSSum + navertenSSum + gmarkettenSSum + wemakepricetenSSum + tikettenSSum,
    });

    useStoreSnp.setState({
      snptwentyL: coupangtwentyLSum + gmarkettwentyLSum + wemakepricetwentyLSum + tikettwentyLSum,
    });
    useStoreSnp.setState({
      snptwentyM: coupangtwentyMSum + gmarkettwentyMSum + wemakepricetwentyMSum + tikettwentyMSum,
    });
    useStoreSnp.setState({
      snptwentyS: coupangtwentySSum + gmarkettwentySSum + wemakepricetwentySSum + tikettwentySSum,
    });

    useStoreSnp.setState({ snpfiveSS: coupangfiveSSSum });
    useStoreSnp.setState({ snptenSS: coupangtenSSSum });
  };

  return (
    <Page title="에스엔피 오픈마켓">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          에스엔피 오픈마켓 총 합계
          <Button
            // disabled={snpBt}
            onClick={onClickOperMarket}
            variant="contained"
            color="secondary"
            endIcon={<Iconify icon="ic:round-access-alarm" />}
          >
            자료집계
          </Button>
        </Typography>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader title="오픈마켓 판매현황판" />

            <CollapsibleTable
              data={[
                snptwentyL,
                snptwentyM,
                snptwentyS,
                snptenL,
                snptenM,
                snptenS,
                snpfiveL,
                snpfiveM,
                snpfiveS,
                snpthreeL,
                snpthreeM,
                snpthreeS,
                snpfiveSS,
                snptenSS,
              ]}
            />
          </Card>
        </Grid>
      </Container>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          에스엔피 오픈마켓 자료 택배자료 변환
        </Typography>
        <Typography gutterBottom>
          <button onClick={ajax요청}>버튼</button>
          카드 : {count}
        </Typography>
        <br />
        <Typography>
          쿠팡 파일 선택!!
          <input id="coupang" name="coupang" type="file" onChange={onChangeFile} />
          수량 : {itemList.coupang.length}개
        </Typography>
        <br />
        <Typography>
          네이버 파일 선택!!
          <input id="naver" name="naver" type="file" onChange={onChangeFile} />
          수량 : {itemList.naver.length}개
        </Typography>
        <br />
        <Typography>
          옥션지마켓 파일 선택!!
          <input id="gmarket" name="gmarket" type="file" onChange={onChangeFile} />
          수량 : {itemList.gmarket.length}개
        </Typography>
        <br />
        <Typography>
          위메프 파일 선택!!
          <input id="wemakeprice" name="wemakeprice" type="file" onChange={onChangeFile} />
          수량 : {itemList.wemakeprice.length}개
        </Typography>
        <br />
        <Typography>
          티켓몬스터 파일 선택!!
          <input id="tiket" name="tiket" type="file" onChange={onChangeFile} />
          수량 : {itemList.tiket.length}개
          <br />
        </Typography>
        <br />
        <Typography>
          여기서부터 아직못함!!
          <br />
          11번가 파일 선택!!
          <input id="st" name="st" type="file" onChange={onChangeFile} />
          수량 : {itemList.st.length}개
        </Typography>
        <br />
        <Typography>
          인터파크 파일 선택!!
          <input id="interpark" name="interpark" type="file" onChange={onChangeFile} />
          수량 : {itemList.interpark.length}개
        </Typography>
        <br />
        <Typography>
          롯데온 파일 선택!!
          <input id="lotte" name="lotte" type="file" onChange={onChangeFile} />
          수량 : {itemList.lotte.length}개
        </Typography>
        <br />
        <Typography>
          <button onClick={originalExcelDownload}> 택배자료 다운로드 </button>
        </Typography>
      </Container>
    </Page>
  );
}
