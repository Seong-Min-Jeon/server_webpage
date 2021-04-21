function effect6() {

    var table = document.getElementById("table");        
    
    var str =  '<div style="clear: both;" class="divTable">\
            <table border="1" bordercolor=#009879 class="settingTable">\
                <thead>\
                    <tr>\
                        <p><td colspan="3" align="center">4랭크에서 등장하는 효과</td></p>\
                    </tr>\
                </thead>\
                <tbody class="equip">\
                    <tr>\
                        <th rowspan="5">전투 경험치 증가</th>\
                        <td>전투 경험치 5% 증가</td>\
                        <td>1.266%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 10% 증가</td>\
                        <td>1.899%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 15% 증가</td>\
                        <td>1.899%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 20% 증가</td>\
                        <td>1.899%</td>\
                    </tr>\
                    <tr>\
                        <td>전투 경험치 25% 증가</td>\
                        <td>0.633%</td>\
                    </tr>\
                    <tr>\
                        <th rowspan="5">회피 확률 증가</th>\
                        <td>회피 확률 5% 증가</td>\
                        <td>1.899%</td>\
                    </tr>\
                    <tr>\
                        <td>회피 확률 10% 증가</td>\
                        <td>1.899%</td>\
                    </tr>\
                    <tr>\
                        <td>회피 확률 15% 증가</td>\
                        <td>1.899%</td>\
                    </tr>   \
                    <tr>\
                        <td>회피 확률 20% 증가</td>\
                        <td>1.899%</td>\
                    </tr>  \
                    <tr>\
                        <td>회피 확률 25% 증가</td>\
                        <td>0.633%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="2">반격 데미지</th>\
                        <td>반격 데미지 2배</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>\
                        <td>반격 데미지 3배</td>\
                        <td>1.899%</td>\
                    </tr>   \
                    <tr>\
                        <th rowspan="3">흡혈</th>\
                        <td>흡혈 0.5%</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>                       \
                        <td>흡혈 1%</td>\
                        <td>1.266%</td>\
                    </tr>    \
                    <tr>                       \
                        <td>흡혈 1.5%</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="4">근접 공격 시 마나 획득</th>\
                        <td>근접 공격 시 10% 확률로 마나 획득</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 15% 확률로 마나 획득</td>\
                        <td>1.899%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 20% 확률로 마나 획득</td>\
                        <td>2.532%</td>\
                    </tr> \
                    <tr>  \
                        <td>근접 공격 시 25% 확률로 마나 획득</td>\
                        <td>0.633%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="4">원거리 공격 시 마나 획득</th>\
                        <td>원거리 공격 시 10% 확률로 마나 획득</td>\
                        <td>1.899%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 15% 확률로 마나 획득</td>\
                        <td>1.899%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 20% 확률로 마나 획득</td>\
                        <td>2.532%</td>\
                    </tr> \
                    <tr>  \
                        <td>원거리 공격 시 25% 확률로 마나 획득</td>\
                        <td>1.266%</td>\
                    </tr>\
                    <tr>\
                        <th rowspan="3">근접 공격 시 독 데미지</th>\
                        <td>근접 공격 시 독 데미지 9</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 독 데미지 10</td>\
                        <td>1.266%</td>\
                    </tr>  \
                    <tr>  \
                        <td>근접 공격 시 독 데미지 11</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">원거리 공격 시 독 데미지</th>\
                        <td>원거리 공격 시 독 데미지 9</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 독 데미지 10</td>\
                        <td>1.266%</td>\
                    </tr>  \
                    <tr>  \
                        <td>원거리 공격 시 독 데미지 11</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="4">근접 공격 시 확률로 10% 회복</th>\
                        <td>근접 공격 시 5% 확률로 10% 회복</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>  \
                        <td>근접 공격 시 8% 확률로 10% 회복</td>\
                        <td>1.899%</td>\
                    </tr>  \
                    <tr>  \
                        <td>근접 공격 시 10% 확률로 10% 회복</td>\
                        <td>1.899%</td>\
                    </tr>  \
                    <tr>  \
                        <td>근접 공격 시 15% 확률로 10% 회복</td>\
                        <td>1.266%</td>\
                    </tr>  \
                    <tr>\
                        <th rowspan="4">원거리 공격 시 확률로 10% 회복</th>\
                        <td>원거리 공격 시 5% 확률로 10% 회복</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>  \
                        <td>원거리 공격 시 8% 확률로 10% 회복</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>  \
                        <td>원거리 공격 시 10% 확률로 10% 회복</td>\
                        <td>1.899%</td>\
                    </tr>  \
                    <tr>  \
                        <td>원거리 공격 시 15% 확률로 10% 회복</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="4">의문의 상자 발견 확률 증가</th>\
                        <td>의문의 상자 발견 확률 5% 증가</td>\
                        <td>3.165%</td>\
                    </tr>   \
                    <tr>  \
                        <td>의문의 상자 발견 확률 10% 증가</td>\
                        <td>2.532%</td>\
                    </tr>  \
                    <tr>  \
                        <td>의문의 상자 발견 확률 15% 증가</td>\
                        <td>3.165%</td>\
                    </tr> \
                    <tr>  \
                        <td>의문의 상자 발견 확률 20% 증가</td>\
                        <td>1.266%</td>\
                    </tr>\
                    <tr>\
                        <th rowspan="3">죽음에 이르는 피해를 입었을 때 확률로 체력 50% 회복</th>\
                        <td>죽음에 이르는 피해를 입었을 때 3% 확률로 체력 50% 회복</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>죽음에 이르는 피해를 입었을 때 5% 확률로 체력 50% 회복</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>  \
                        <td>죽음에 이르는 피해를 입었을 때 8% 확률로 체력 50% 회복</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">화살 장전 속도 감소</th>\
                        <td>화살 장전 속도 감소 I</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>\
                        <td>화살 장전 속도 감소 II</td>\
                        <td>1.266%</td>\
                    </tr>  \
                    <tr>  \
                        <th rowspan="2">확산 화살</th>\
                        <td>확산 화살 I</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>  \
                        <td>확산 화살 II</td>\
                        <td>0.633%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">독 데미지 경감</th>\
                        <td>독 데미지 10% 경감</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>                        \
                        <td>독 데미지 20% 경감</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>                        \
                        <td>독 데미지 30% 경감</td>\
                        <td>0.633%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">위더 데미지 경감</th>\
                        <td>위더 데미지 10% 경감</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>                        \
                        <td>위더 데미지 20% 경감</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>                        \
                        <td>위더 데미지 30% 경감</td>\
                        <td>0.633%</td>\
                    </tr> \
                    <tr>                 \
                        <th>추위 면역</th>       \
                        <td>추위 면역</td>\
                        <td>0.633%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">공격력</th>\
                        <td>공격력: 1000</td>\
                        <td>1.266%</td>\
                    </tr>   \
                    <tr>  \
                        <td>공격력: 2000</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>  \
                        <td>공격력: 3000</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">추가 데미지(인간형)</th>\
                        <td>추가 데미지(인간형): 1000</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(인간형): 2000</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>  \
                        <td>추가 데미지(인간형): 3000</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">추가 데미지(동물형)</th>\
                        <td>추가 데미지(동물형): 1000</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(동물형): 2000</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>  \
                        <td>추가 데미지(동물형): 3000</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="3">추가 데미지(기타)</th>\
                        <td>추가 데미지(기타): 1000</td>\
                        <td>0.633%</td>\
                    </tr>   \
                    <tr>  \
                        <td>추가 데미지(기타): 2000</td>\
                        <td>1.899%</td>\
                    </tr> \
                    <tr>  \
                        <td>추가 데미지(기타): 3000</td>\
                        <td>1.266%</td>\
                    </tr> \
                    <tr>\
                        <th rowspan="2">스플레시</th>\
                        <td>스플레시: 1000</td>\
                        <td>1.266%</td>\
                    </tr>  \
                    <tr>\
                        <td>스플레시: 2000</td>\
                        <td>1.266%</td>\
                    </tr> \
                </tbody>        \
            </table>           \
            </div>\
            <br><br>\
            <div class="manual"> \
                    <strong>참고사항</strong>\
                    <br>\
                    <strong>1.</strong>\
                    <i>한 장신구에 \'전투 경험치 30% 증가\', \'전투 경험치 20% 증가\'와 같이 같은 효과가 중복하여 부여된 경우에는 효과가 중첩되서 적용됩니다. <br>(예시의 경우 \'전투 경험치 50% 증가\'로 취급합니다.)</i>\
                    <br>\
                    <strong>1-1.</strong>\
                    <i>예외적으로 \'반격 데미지\', \'근접 공격 시 독 데미지\', \'원거리 공격 시 독 데미지\', \'화살 장전 속도 감소\', \'확산 화살\', \'추위 면역\', <br> \'탄환 장전 속도 감소\'는 중첩 적용 되지 않습니다.</i>\
                    <br>\
                    <strong>2.</strong>\
                    <i>세공 시 장신구에 부여되어 있던 효과 모두가 교체됩니다. <br>(효과 개수가 3줄인 경우 3개의 효과 모두 랜덤하게 바뀌게 됩니다.)</i>\
                </div>'

    table.innerHTML = str;  
} 