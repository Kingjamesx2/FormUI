import React from 'react';

interface EnrollmentData {
  year: string;
  associate: string;
  undergraduate: string;
  graduate: string;
  other: string;
  total: string;
}

const enrollmentTrends: EnrollmentData[] = [
  { year: '2021/2022', associate: '', undergraduate: '', graduate: '', other: '', total: '' },
  { year: '2022/2023', associate: '', undergraduate: '', graduate: '', other: '', total: '' },
  { year: '2023/2024', associate: '', undergraduate: '', graduate: '', other: '', total: '' },
];

const EnrollmentTable: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#e3cafa', padding: '20px', borderRadius: '15px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Degree Program</th>
            {enrollmentTrends.map((trend, index) => (
              <th key={index}>{trend.year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['Associate', 'Undergraduate', 'Graduate (MBA - 19 + MEDL - 47)', 'Other', 'Total'].map((program, rowIndex) => (
            <tr key={rowIndex}>
              <td>{program}</td>
              {enrollmentTrends.map((trend, colIndex) => (
                <td key={colIndex}>
                  {program === 'Associate' && trend.associate}
                  {program === 'Undergraduate' && trend.undergraduate}
                  {program === 'Graduate (MBA - 19 + MEDL - 47)' && trend.graduate}
                  {program === 'Other' && trend.other}
                  {program === 'Total' && trend.total}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentTable;
